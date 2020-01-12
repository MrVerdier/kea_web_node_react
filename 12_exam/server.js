const express = require('express')
const app = express()

// Sockets
const server = require("http").createServer(app)
const io = require('socket.io')(server)

let userCounter = 0

io.on('connection', function(socket){

    socket.on('disconnect', function(){
        return false
    })

    socket.on("add-person", function(){
            userCounter++
            // console.log("user " + " added")  
            // console.log(userCounter + " user(s) online")  
            io.emit('total-online', userCounter)
        })
        io.emit('total-online', userCounter)
    
    socket.on("remove-person", function(user){
        if (user == '') {
            return false
        } 
        else {
            userCounter-- 
            userCounter = Math.max(0,userCounter)
            // console.log(user + " logged out")
            // console.log(userCounter + "user(s) online") 
            io.emit('total-online', userCounter)
        }
    })
  })

// Bodyparser
app.use(express.urlencoded({ extended: true}))
app.use(express.json())

// Middleware
const rateLimit = require("express-rate-limit")

const authLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 10 // limit each IP to 10 requests per windowMs
})

app.use("/users/login", authLimiter)
app.use("/users/signup", authLimiter)
app.use("/users/activate", authLimiter)

const fileUpload = require('express-fileupload')  
app.use(fileUpload()) 

// Session
const session = require("express-session")

app.use(session({
    secret: 'Lobsters bladders are in their heads.',
    resave: false,
    saveUninitialized: true,
}))

// Router import
const usersRoute = require('./routes/usersRoute')
const sessionRoute = require('./routes/sessionRoute')
const drinksRoute = require('./routes/drinksRoute')
app.use(usersRoute)
app.use(sessionRoute)
app.use(drinksRoute)


// Knex/Objection connection
const Knex = require('knex')
const knexConfig = require('./knexfile')
const Model = require('objection').Model
const knex = Knex(knexConfig.development)
Model.knex(knex)

server.listen(8080, (error) => {
    if (error) {
        console.log(error)
    }
    console.log("server is running on port 8080")
})

module.exports = app