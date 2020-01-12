const express = require("express");
const app = express();

// Bodyparser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Middleware
const rateLimit = require("express-rate-limit");

const authLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 10, // limit each IP to 100 requests per windowMs
    message: "To many authentication attempts, please wait 15 minutes"
  });
  
  
  //  apply to all requests
  app.use("/users/login", authLimiter);
  app.use("/users/signup", authLimiter);
  
  // Wildcard
  // app.get("/test/*", (req, res, next) => {
      //     // res.send("test was called")
      //     // res.redirect("/test/potofgold")
      //     console.log("does this get called?")
//     next()
// })

// app.get("/test/potofgold", (req, res) => {
    //     res.send("pot of gold")
    // })

const session = require('express-session')

app.use(session({
    secret: 'secretsshh',
    resave: false,
    saveUninitialized: true,
  }))

  app.get("/setsessionvariable", (req, res) => {
      req.session.user = {name: "AV"}
      res.send("OK")
  })

  app.get("/getsessionvariable", (req, res) => {
      res.send(req.session.user)
  })

  // destroy session when logging out

    
// router imports
const usersRoute = require('./routes/usersRoute');

app.use(usersRoute);

const Knex = require('knex');
const knexConfig = require('./knexfile');
const Model = require('objection').Model;

const knex = Knex(knexConfig.development);

Model.knex(knex);

app.listen(8080, (error) => {
    if (error) {
        console.log(error);
    }
    console.log("server is running on" )
})