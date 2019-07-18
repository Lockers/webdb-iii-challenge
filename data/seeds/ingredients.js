
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('Ingredients').insert([
        { Ingredient: 'eggs' },
        { Ingredient: 'cups of milk' },
        { Ingredient: 'pinches of salt' },
        { Ingredient: 'pinches of pepper' },
        { Ingredient: 'grams of butter' },
      ]);
    });
};
