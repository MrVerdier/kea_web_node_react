const router = require('express').Router()
const User = require('../models/User')
const bcrypt = require('bcrypt')
const validator = require('email-validator')

const saltRounds = 10

router.get('/api/users/getuser', async (req, res) => {
    const user_id = req.session.user
    if (!user_id) {
        res.status(400).json({response: "no user"})
    } else {
        const user = (await User.query().select('id', 'username', 'firstName', 'lastName', 'email').where({ id: user_id }))[0]
        res.json(user)
    }
})

router.post('/api/users/signup', async (req, res) => {
    const { username, firstname, lastname, email, password } = req.body

    if (!(username && firstname && lastname && email && password)) {
        res.status(400).json({ response: 'You must fill out the fields'})
    } 
    else if (!(validator.validate(email))) {
        res.status(400).json({ response: 'Must be a valid email address' })
    } 
    else {
        const users = await User.query().select().where({username: req.body.username}).limit(1)
        const validUser = users[0]

        if (validUser) {
            res.status(400).json({ response: "User already exist" })
        } 
        else {
            bcrypt.hash(password, saltRounds, async(error, hash) => {
                if (error) {
                    res.status(500).json({ response: error })
                } else {
                    const newUser = {
                        ...req.body, 
                        password: hash
                    }
                    const user = await User.query().insert(newUser)
                    res.status(200).json({ message: username + 'User Created' })
                }
            })
        }
    }
})

router.post('/api/users/login', async (req, res) => {
    const { username, password } = req.body
    const users = await User.query().where({ username: username }).limit(1)
    const validUser = users[0]

    if (validUser) {
        bcrypt.compare(password, validUser.password, (error, response) => {
            if (error) {
                res.status(500).json({ error: "Error" })
            }
            else {
                if (response === true) {
                    req.session.user = validUser.id
                    res.status(200).json({response: "Logged in"})
                    console.log('sess: ', req.session.user)
                } 
                else {
                    res.status(400).json({ response: 'Login failed' })
                }
            }
        })
    } 
    else {
        res.status(400).json({ response: 'User does not exist' })
    }
})

module.exports = router