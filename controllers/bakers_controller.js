// dependencies
const express = require('express')
const baker = express.Router()
const Baker = require('../models/bakers.js')
const bakerSeedData = require('../models/baker_seed.js')

// Index: 
baker.get('/', (req, res) => {
    Baker.find()
        .populate('breads')
        .then(foundBakers => {
            res.send(foundBakers)
        })
})                    

baker.get('/data/seed', (req, res) => {
    Baker.insertMany(bakerSeedData)
        .then(res.redirect('/breads'))
})

baker.delete('/:id', function(req, res){
    Baker.findByIdAndDelete(request.params.id)
    .then(() => {
        response.status(303). redirect('/breads')
    })
})

// export
module.exports = baker                    
