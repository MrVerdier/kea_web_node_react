const credentials = require('./config/mysql_credentials')

module.exports = {

  development: {
    client: 'mysql2',
    connection: {
      database: credentials.database,
      user:     credentials.user,
      password: credentials.password
    },
    
  },
}