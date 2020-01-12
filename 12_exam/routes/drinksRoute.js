const router = require('express').Router()
const User = require('../models/User')
const CustomDrinks = require('../models/CustomDrinks')
const UserFavoriteDrinks = require('../models/UserFavoriteDrinks')

router.get('/api/drinks/getcustomdrinks', async (req, res) => {
    const customdrinks = await CustomDrinks.query().select().eager('custom_drinks')

    if(customdrinks === null) {
        return res.status(400).json({msg:"no drinks"})
    }
    
    res.json(customdrinks)
})

router.get('/api/drinks/getcustomdrinksbyid', async (req, res) => {
    const custom_drink_id = req.query.id

    if(custom_drink_id === undefined) {
        return res.status(400).json({msg:"error"})
    }

    const customdrink = await CustomDrinks.query().select().where('id', '=', custom_drink_id)
    res.json(customdrink)
})

router.get('/api/drinks/getuserdrinks', async (req, res) => {
    const user_id = req.session.user

    if(user_id === undefined) {
        return res.status(400).json({msg:"error"})
    }

    const userDrinks = await User.query().select().where('id', user_id).eager('drinks')
    res.json(userDrinks)
})

router.get('/api/drinks/getfavoritedrinks', async (req, res) => {
    const user_id = req.session.user

    if(user_id === undefined) {
        return res.status(400).json({msg:"error"})
    }

    const favorites = await UserFavoriteDrinks.query().select().where('user_fk', user_id)
    res.json(favorites)
})


router.get('/api/drinks/getfavorite', async (req, res) => {
    const user_id = req.session.user
    const drink_id = req.query.id

    if(drink_id === undefined || user_id === undefined) {
        return res.status(400).json({msg:"error"})
    }

    const favorite = await UserFavoriteDrinks.query().select().where('user_fk', user_id).andWhere('drink_fk', drink_id)

    if (favorite.length < 1) {
        let response = false 
        res.json(response)
    } else {
        let response = true
        res.json(response)
    }

})

router.post('/api/drinks/setfavoritedrink', async (req, res) => {
    const user_id = req.session.user
    const drink_id = req.body.drinkId
    console.log(user_id+" "+drink_id)
    
    if(req.body.drinkId === undefined || user_id === undefined) {
        return res.status(400).json({msg:"error"})
    } else {

        const newFavorite = {
            user_fk: user_id,
            drink_fk: drink_id
        }

        const favoriteDrink = await UserFavoriteDrinks.query().insert(newFavorite)
        res.status(200).json({msg:"ok"})
    }
})

router.post('/api/drinks/uploadcustomdrink', async (req, res) => {
    const user_id = req.session.user

    if(req.body === null && user_id === null) {
        return res.status(400).json({msg:"No drink was uploaded"})
    }

    const newDrink = {
        ...req.body,
        image_url: req.body.image_url,
        user_fk: user_id
    }

    const drink = await CustomDrinks.query().insert(newDrink)
    
    if (req.files === null) {
        return res.status(400).json({ msg: 'No file uploaded' })
    }
    
    const file = req.files.file

    file.mv(`../client/public/uploads/${file.name}`, err => {
    if (err) {
        console.error(err)
        return res.status(500).send(err)
    }

    res.json({ fileName: file.name, filePath: `/uploads/${file.name}` })
    })

})

module.exports = router