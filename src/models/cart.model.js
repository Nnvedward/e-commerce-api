const mongoose = require('mongoose')

const cartSchema = new mongoose.Schema({
    itemId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    }
})

const Cart = mongoose.model('Cart', cartSchema)

module.exports = Cart