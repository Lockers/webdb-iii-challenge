
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Shopping List').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('Shopping List').insert([
        { Ingredient_ID: 1, Quantity: 4, Recipe_ID: 1 },
        { Ingredient_ID: 2, Quantity: 1, Recipe_ID: 1 },
        { Ingredient_ID: 3, Quantity: 1, Recipe_ID: 1 },
        { Ingredient_ID: 4, Quantity: 1, Recipe_ID: 1 },
        { Ingredient_ID: 5, Quantity: 20, Recipe_ID: 1 },
      ]);
    });
};
