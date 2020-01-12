
exports.up = function(knex) {
    return knex.schema
      .createTable('users', (table) => {
          table.increments('id');
          table.string('username')
          table.string('email')
          table.string('password')
          table.string('firstname')
          table.string('lastname')
          table.timestamp('created_at').defaultTo(knex.fn.now())
      })
  };
  
  exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('users')
  };
  