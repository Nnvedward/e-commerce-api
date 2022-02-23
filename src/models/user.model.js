const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    password: {
        type: String,
        minlength: 6,
        required: true,
        trim: true
    },
    roleId: {
        type: String
    }
}, {
    timestamps: true
})

const User = mongoose.model('User', userSchema)

module.exports = User