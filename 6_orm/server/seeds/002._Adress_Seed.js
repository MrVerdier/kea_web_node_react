
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('addresses').del()
    .then(function () {
      // Inserts seed entries
      return knex('addresses').insert([
        {id: 1, user_id: 1, street_name: "A Street"},
        {id: 2, user_id: 1, street_name: "Another Street"}
      ]);
    });
};
