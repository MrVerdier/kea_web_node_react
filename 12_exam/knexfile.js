const credentials = require('./config/mysql_credentials')

module.exports = {

  development: {
    client: 'mysql2',
    connection: {
      host : 'verdier.nu.mysql',
      user : 'verdier_nu',
      password : 'mFPT52pq',
      database : 'verdier_nu'
    },
    
  },
}