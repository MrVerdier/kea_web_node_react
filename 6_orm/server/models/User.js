const { Model, snakeCaseMappers } = require('objection')

class User extends Model {
    static tableName = "users"

    static get columnNameMappers() {
        return snakeCaseMappers()
    }
    
    static get relationMappings() {
        const Address = require('./Address');
        return {
          addresses: {
            relation: Model.HasManyRelation,
            modelClass: Address,
            join: {
              from: 'users.id',
              to: 'addresses.user_id'
            }
          }
        }
    }
}

module.exports = User