
exports.up = function(knex) {
    return knex.schema
      .createTable('emails', (table) => {
          table.increments('id');
          table.string('from')
          table.string('to')
          table.string('subject')
          table.string('text')
          table.integer('user_fk').unsigned()
          table.foreign('user_fk').references('users.id');
          table.timestamp('created_at').defaultTo(knex.fn.now())
      })
  };
  
  exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('emails')
  };
  