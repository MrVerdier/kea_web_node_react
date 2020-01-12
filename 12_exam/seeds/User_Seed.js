
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, username: 'a', firstname: 'aa', lastname: 'aaa', password: '$2y$10$hlPiMoXPWiyUZBma/zGBNuOx5LV8NzNPLdg1oUKsuTytBVoYRHsOy', email: 'a@a.com', active: 1},
        {id: 2, username: 'b', firstname: 'bb', lastname: 'bbb', password: '$2y$10$cSezJ/s/EA059u6YfAGvh.jtWS/nqypl4cb9FeThbUFLIqobpktju', email: 'b@b.com', active: 1},
      ])
    })
}
