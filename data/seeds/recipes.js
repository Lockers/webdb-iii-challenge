
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('Recipes').insert([
        { Recipe: 'Scrambled Eggs', Step_By_Step: 'Scramble Eggs add the stuff, cook it, eat it.. simples' },
      ]);
    });
};
