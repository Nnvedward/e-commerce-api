const mongoose = require('mongoose')

const shippingSchema = new mongoose.Schema({
    location : {
        type: String,
        required: true,
        trim: true
    },
    orderUniqueId: {
        type: mongoose.Schema.Types.String,
        required: true,
        ref: 'Order'
    },
    cost: {
        type: Number,
        required: true,

    }
})

const Shipping = mongoose.model('Shipping', shippingSchema)

module.exports = Shipping