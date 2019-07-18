
exports.up = function (knex) {
    return knex.schema
        .createTable('Recipes', table => {
            table.increments();
            table.text('Recipe', 64)
                .unique()
                .notNullable()
            table.string('Step_By_Step', 255)
                .notNullable();
        })
        .createTable('Ingredients', table => {
            table.increments();
            table.text('Ingredient', 64)
                .unique()
                .notNullable()
        })
        .createTable('Shopping List', table => {
            table.increments();
            table.integer('Ingredient_ID')
                .notNullable()
                .references('id')
                .inTable('Ingredients')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');
            table.float('Quantity')
                .notNullable();
            table.integer('Recipe_ID')
                .notNullable()
                .references('id')
                .inTable('Recipes')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');
        })
};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('Shopping List')
        .dropTableIfExists('Ingredients')
        .dropTableIfExists('Recipes');
};
