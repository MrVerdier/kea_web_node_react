
exports.up = function(knex) {
    return knex.schema 
        .createTable('users', (table) => {
            table.increments('id')
            table.string('username', 190).unique()
            table.string('firstname')
            table.string('lastname')
            table.string('password')
            table.string('email', 190).unique()
            table.boolean('active')
            table.timestamp('created_at').defaultTo(knex.fn.now())       
        })
        .createTable('custom_drinks', (table) => {
            table.increments('id')
            table.string('name')
            table.string('image_url')
            table.string('category')
            table.string('ingredients')
            table.string('instructions')
            table.integer('user_fk').unsigned()
            table.foreign('user_fk').references('users.id')
            table.timestamp('upload_date')
        })
        .createTable('user_favorite_drinks', (table) => {
            table.increments('id')
            table.integer('user_fk').unsigned()
            table.foreign('user_fk').references('users.id')
            table.integer('drink_fk').unsigned()
        }) 
}

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('users')
    .dropTableIfExists('custom_drinks')
    .dropTableIfExists('user_custom_drinks')
}
