const express = require("express")
const app = express()

const bodyParser = require("body-parser")

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
// allow to serve static files from here
app.use(express.static('public'));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/../public/index.html");
});

app.post("/aboutme", (req, res) => {
    console.log(req.body)
    res.send("My name is: " + req.body.firstName + " " + req.body.lastName);
}); 

const server = app.listen(3000, (error) => {
    if(error) {
        console.log("Server could not start error: " (error))
    }
    console.log("Server has startet on port: " + server.address().port)
}) 