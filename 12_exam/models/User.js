const { Model } = require('objection')

class User extends Model {

    static get tableName() {
        return 'users'
    }

    static get relationMappings() {
        const CustomDrinks = require('./CustomDrinks')
        return {
          drinks: {
            relation: Model.HasManyRelation,
            modelClass: CustomDrinks,
            join: {
              from: 'users.id',
              to: 'custom_drinks.user_fk'
            }
          }
        }
    }
}

module.exports = User


// favorites
// add custom drinks / stored in db seperate from api
// 