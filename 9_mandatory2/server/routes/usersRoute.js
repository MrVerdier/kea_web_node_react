const router = require("express").Router()
const User = require('../models/User')
const jwt = require('jsonwebtoken')
const secret = 'mysecretsshhh'
const withAuth = require('./../middleware/withAuth')
// const bcrypt = require('bcrypt'); // MODULE NOT WORKING

router.get('/checkToken', withAuth, function(req, res) {
    res.sendStatus(200);
  })

// get all users
router.get('/users', withAuth, async (req, res) => {
    const users = await User.query().column('firstname', 'username', 'email').select()
    res.send(users)
});

// signup 
router.post('/users/signup', async (req, res) => {

    if (req.body.username && req.body.password) {
 
            const newUser = { 
                username:req.body.username,
                password:req.body.password 
            };

            const { user } = await User.query().insert(newUser)

            
            res.status(200).send({ })
        
    } else {
        res.status(400).json({ response: "Missing signup information" })
    }
});

// login 
router.post('/users/login', async (req, res) => {

    if (req.body.email && req.body.password) {
        const { email, password } = req.body
        const users = await User.query().select().where({ email: email }).limit(1)
        const user = users[0]
        
        // if (users.length > 0) {
        //     bcrypt.compare(req.body.password, user.password, function(err, response) {} // FUNCTION FOR BCRYPT - MODULE NOT WORKING AT THE MOMENT
            
        if (user) {
            if (password == user.password) {
                    // Issue token
                    const payload = { email }
                    const token = jwt.sign(payload, secret, {
                        expiresIn: '1h'
                    });
                    res.cookie('token', token, { httpOnly: true })
                    res.status(200).json({response: 200})
                } else {
                    res.status(400).json({response: 400})
                }
            } else {
            res.status(401).json({response: "User missing"})
        }
    }
})

// logout

router.get('/users/logout',(req,res) => {
    req.session.destroy((err) => {
        if(err) {
            return console.log(err)
        }
        console.log("logged out")
        res.redirect('/users/login')
    });
})

module.exports = router