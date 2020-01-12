const { Model, snakeCaseMappers } = require('objection')

class Address extends Model {
  
    static tableName = "addresses"

    static get columnNameMappers() {
      return snakeCaseMappers()
  }

    static get relationMappings() {
        const User = require('./User');
        return {
          addresses: {
            relation: Model.BelongsToOneRelation,
            modelClass: User,
            join: {
              from: 'addresses.user_id',
              to: 'users.id'
            }
          }
        }
    }
}

module.exports = Address