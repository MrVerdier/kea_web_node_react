const express = require("express")
const app = express()
const path = require("path")

app.get("/", function(req, res){
    res.sendFile(path.join(__dirname + "/../client/index.html"))
})


app.listen("3000", (error) => {
    if(error){
        console.log(error)
    }
    console.log("Server is running")
})