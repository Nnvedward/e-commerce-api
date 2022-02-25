const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
    orderUniqueId : {
        type: String,
        required: true,
        trim: true
    },
    itemId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Item'
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    price: {
        type: Number,
        required: true,
    }
})

const Order = mongoose.model('Order', orderSchema)

module.exports = Order