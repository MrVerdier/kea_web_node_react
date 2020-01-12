
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
    .createTable('addresses', (table) => {
        table.increments('id')
        table.integer('user_id').unsigned()
        table.foreign('user_id').references('users.id')
        table.string('street_name')
        table.string('house_number')
        table.string('city_name')
        table.string('zip_code')
        table.string('country')
    });
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('adresses')
  .dropTableIfExists('users')
};
