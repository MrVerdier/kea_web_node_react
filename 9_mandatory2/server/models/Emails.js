const { Model } = require('objection')

class Emails extends Model {

    static get tableName() {
        return 'emails'
    }

    static get relationMappings() {
        const User = require('./User')
        return {
          emails: {
            relation: Model.BelongsToOneRelation,
            modelClass: User,
            join: {
              from: 'emails.user_fk',
              to: 'users.id'
            }
          }
        }
    }
}


module.exports = Emails
