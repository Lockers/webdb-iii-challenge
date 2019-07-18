const knex = require('knex');
const db = knex(require('../knexfile').development);

getRecipes = () => {
    return db('Recipes')
}

getIngredients = (id) => {
    return db('Shopping')
        .select(
            'Recipes.Recipe',
            'Ingredients.Ingredient', 
            'Quantity')
        .from('Shopping List')
        .join('Recipes', 'Recipe_ID', 'Recipes.id')
        .join('Ingredients', 'Ingredient_ID', 'Ingredients.id')
        .where({ 'Recipe_ID': id })
    
} 
getStepByStep = (id) => {
    console.log('Step by Step Firing')
    return db('Recipes')
        .select('Recipe', 'Step_By_Step').from('Recipes')
        .where({ id })
}



module.exports = {
    getRecipes,
    getIngredients,
    getStepByStep
}