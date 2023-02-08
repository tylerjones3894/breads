// dependencies
const mongoose = require('mongoose')
const { Schema } = mongoose

const Bread = require('./bread')

// schema
const bakerSchema = new Schema({
    name: {type: String, 
        required: true, 
        enum: ['Rachel', 'Monica', 'Joey', 'Chandler', 'Ross', 'Phoebe']},
    startDate: {type: Date, required: true},
    Bio: {type: String}
    }, {toJSON: {virtuals: true}})

// model and export
const Baker = mongoose.model('Baker', bakerSchema)

// Virtuals
bakerSchema.virtual('breads', {
    ref: 'Bread',
    localField: '_id',
    foreignField: 'baker'
})

// Hooks
bakerSchema.post('findOneAndDelete', function() {
    Bread.deleteMany({baker: this._condition._id})
    .then(deleteStatus => {
        console.log(deleteStatus)
    })
})

module.exports = Baker
