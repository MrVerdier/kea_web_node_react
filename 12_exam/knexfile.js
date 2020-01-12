const credentials = require('./config/mysql_credentials')

module.exports = {

  development: {
    client: 'mysql2',
    connection: {
      host : credentioals.host,
      user : credentials.user,
      password : credentials.password,
      database : credentials.database
    },
    
  },
}