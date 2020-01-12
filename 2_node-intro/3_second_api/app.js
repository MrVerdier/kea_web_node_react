const express = require("express")
const app = express()

const bodyParser = require("body-parser")


app.use(bodyParser.json())
// allow to serve static files from here
app.use(express.static('public'))

// app.get("/", (req, res) => {
//     // res.status(200).send("try") // Sending an error request
//     res.sendFile(__dirname + "/public/index.html")
// }) 

app.get("/aboutme", (req, res) => {
    const response = {
        firstName: "Anders",
        lastName: "Verdier"
    }
    res.json(response)
})

// query string
app.get("/about", (req, res) => {
    let firstName = req.query.firstname = "Anders"
    let lastName = req.query.lastname = "Verdier"

    res.send(firstName+" "+lastName) // only one res like a "return" - node code below  
})

// request parameter / URL parameter
app.get("/age/:myAge/:height", (req, res) => {
    res.send(req.params.myAge +" "+ req.params.height)
})

app.post("/myfavoriteanimal", (req, res) => {
    console.log(req.body)
    res.send("your favorite animal is:" + req.body.favoriteAnimal)
})

const server = app.listen(3000, (error) => {
    if(error) {
        console.log("Error running the code", error)
    }
    console.log("Server is running at port", server.address().port)
})
