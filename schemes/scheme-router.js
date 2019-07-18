const express = require('express');

const db = require('./scheme-helpers');

const router = express.Router();

router.get('/', (req, res) => {
    db.getRecipes()
        .then(response => {
            res.status(200).json(response)
        })
        .catch(error => {
        res.status(500).json({Error: 'Internal Server Error'})
    })
    
})

router.get('/:id/shoppingList', (req, res) => {
    db.getIngredients(req.params.id)
        .then(response => {
            res.status(200).json(response)
        })
        .catch(error => {
            res.status(500).json({ Error: 'Internal Server Error' })
        })

})

router.get('/:id', (req, res) => {
    db.getStepByStep(req.params.id)
        .then(response => {
            res.status(200).json(response)
        })
        .catch(error => {
            res.status(500).json({ Error: 'Internal Server Error' })
        })

})


module.exports = router;