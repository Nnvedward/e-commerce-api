const mongoose = require('mongoose')

const transactionSchema = new mongoose.Schema({
    transactionNumber: {
        type: Number,
        required: true
    },
    referenceNumber: {
        type: Number,
        required: true
    },
    orderId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Order'
    },
    amount: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        required: true,
        default: Date.now
    }
})

const Transaction = mongoose.model('Transaction', transactionSchema)

module.exports = Transaction