const mongoose = require('mongoose')

const itemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    categoryId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Category'
    },
    manufacturerId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Manufacturer'
    }
})

const Item = mongoose.model('Item', itemSchema)

module.exports = Item