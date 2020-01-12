const { Model } = require('objection')

class CustomDrinks extends Model {
    static get tableName() {
        return 'custom_drinks'
    }

    static get relationMappings() {
        const User = require('./User')
        return {
          custom_drinks: {
            relation: Model.BelongsToOneRelation,
            modelClass: User,
            join: {
              from: 'custom_drinks.user_fk',
              to: 'users.id'
            }
          }
        }
    }
}

module.exports = CustomDrinks