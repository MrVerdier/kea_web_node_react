const express = require("express")
const app = express()
const cookieParser = require('cookie-parser')


const session = require('express-session')

app.use(session({
    secret: 'secretsshh',
    resave: false,
    saveUninitialized: true,
  }))


app.use(cookieParser())

// Bodyparser
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

const rateLimit = require("express-rate-limit")

const authLimiter = rateLimit({
    windowMs: 1 * 60 * 1000, // 15 minutes
    max: 10, // limit each IP to 100 requests per windowMs
    message: "To many authentication attempts, please wait 15 minutes"
  });

  //  apply to all requests
app.use("/users/login", authLimiter)
app.use("/users/signup", authLimiter)

const usersRoute = require('./routes/usersRoute')
const emailRoute = require('./routes/emailRoute')

app.use(usersRoute)
app.use(emailRoute)

const Knex = require('knex')
const knexConfig = require('./knexfile')
const Model = require('objection').Model

const knex = Knex(knexConfig.development)

Model.knex(knex)

const server = app.listen(8080, (error) => {
    if (error) {
        console.log(error)
    }
    console.log("server is running on", server.address().port )
})