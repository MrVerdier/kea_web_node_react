const express = require('express')
const app = express()

const server = require('http').createServer(app)
const io = require('socket.io')(server)

io.on("connection", socket => {
    // console.log("Socket joined", socket.id)
    socket.on("I'm thinking about this", data => {
        // sends out to all clients
        // io.emit("Someone said", data)

        // only sends to the client itself
        // socket.emit("Someone said", data)

        // sends to all clients but the client itself
        socket.broadcast.emit("Someone said", data)
    })
    
    // socket.on("disconnect", () => {
    //     console.log("Socket left", socket.id)
    // })
})

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