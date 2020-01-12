const { Model } = require('objection')

class UserFavoriteDrinks extends Model {
    static get tableName() {
        return 'user_favorite_drinks'
    }
}

module.exports = UserFavoriteDrinks