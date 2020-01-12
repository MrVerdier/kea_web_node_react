
exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('custom_drinks').del()
      .then(function () {
        // Inserts seed entries
        return knex('custom_drinks').insert([
          {id: 1, name: 'Whiskey Extra Sour', image_url: '8529e4286dfe415f99099ccde3ed9e01.jpg', category: 'ordinary drink', ingredients: 'Whiskey, Egg, Lemon, Syrup', instructions: 'Pour and drink', user_fk: 1},
          {id: 2, name: 'Old Fashioned w. Bergamotte', image_url: 'Old-Fashioned.png', category: 'cocktail', ingredients: 'Whiskey, Orange, Bergamotte', instructions: 'Pour and drink', user_fk: 2}
        ])
      })
  }
  