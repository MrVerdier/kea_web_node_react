const crypto = require('crypto')

exports.createCat = (gender) => {
    return {
        gender,
        name: crypto.randomBytes(32).toString('hex'),
        limbs: ['leg', 'leg', 'leg', 'leg'],
        owner: undefined
    }
}

// console.log(createCat())