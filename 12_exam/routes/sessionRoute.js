const router = require('express').Router()
const User = require('../models/User')

router.get("/api/setsession", (req, res) => {
    req.session.user = req.session.id
    res.send("OK")
})

router.get("/api/getsession", (req, res) => {
    if (req.session.user === undefined) {
        res.status(400).json({response: "no user"})
    } 
    else {
        res.send({ user_id: req.session.user })
    }
})

router.get("/api/getsessionuser", async (req, res) => {
    const user_id = req.session.user
    if (!user_id) {
        res.status(400).json({response: "no user"})
    } else {
        const fullUser = (await User.query().select('id', 'username', 'firstName', 'lastName', 'email').where({ id: user_id }))[0]
        res.send({ user: fullUser })
    }
})

router.get("/api/destroysession", (req, res) => {
    res.send({ response: "Logged out", status: 200 })
    req.session.destroy(function(err) {
    })
})

module.exports = router