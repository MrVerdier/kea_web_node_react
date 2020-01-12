const router = require('express').Router();
const User = require('../models/User');
const Address = require('../models/Address');
const bcrypt = require('bcrypt');

// router.get('/users', async (req, res) => {
//     const users = await User.query().column('firstname', 'username').select()
//     res.json(users);
// });

router.get('/users', async (req, res) => {
  const users = await User.query().select().eager('addresses')
  res.json(users);
});

router.post('/users/login', async(req, res) => {
  // todo get username and get from mysq
  const users = await User.query().select().where({username: req.body.username}).limit(1)
  const user = users[0]
  console.log(user) 
  if (users.length > 0) {
    bcrypt.compare(req.body.password, user.password, function(err, response) {

      if (err) {
         res.status(500).json({err: "Error"})
      }

      if( response === true) {
        res.status(200).json({"response": "Logged"})
      }

      else {
        res.status(400).json({"message": "OK"})
      }

    });
  } else {
    res.status(401).json({err: "Error"})
  }

  // console.log(user)
  // if (user) {
  //   res.status(200).json(user)
  // } else {
  //   res.status(400).json({})
  // }
})

router.post('/users/signup', (req, res) => {
    // todo validate the input
    if (req.body.password && req.body.username) {
      bcrypt.hash(req.body.password, 10, async function(err, hash) {

        if (err) {
          return res.status(500).json({"err": err})
        }

        const newUser = {
          username: req.body.username,
          password: hash
        }

        const user = await User.query().insert(newUser)
        res.status(200).json({ message:user })
    })
  } else {
    res.json({message: "missing input"})
  }
})

router.put('/users', async (req, res) => {
    res.send();
})

router.delete('/users', async (req, res) => {
    res.send();
})

module.exports = router;