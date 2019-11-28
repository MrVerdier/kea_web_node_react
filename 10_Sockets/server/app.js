const socket = require('socket.io')
const express = require('express')
const app = express()

const server = require('http').createServer(app)

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html")
})

const environment = process.env.ENVIRONMENT
const PORT = environment === "PROD" ? 80 : 8080

server.listen(PORT, (error) =>{
    if (error) {
        console.log(error)
    }
    console.log("Server is running on port", PORT)
})