const { Model } = require('objection')

class User extends Model {
    static get tableName() {
        return 'users'
    }

    static get relationMappings(){
        const Emails = require('./Emails')
        return {
            emails: {
                relation: Model.HasOneRelation,
                modelClass: Emails,
                join: {
                    from: 'users.id',
                    to: 'emails.user_fk'
                }
            },
        }
    }
}

module.exports = User