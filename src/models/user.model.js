const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        trim: true
    },
    username: {
        type: String,
        required: [true, "Username is required"],
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        minlength: 6,
        trim: true
    },
    roleId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Role'
    }
}, {
    timestamps: true
})

const User = mongoose.model('User', userSchema)

module.exports = User