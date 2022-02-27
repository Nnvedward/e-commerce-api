const mongoose = require('mongoose')

const roleSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        trim: true,
        required: true
    }
})

// User-Role relationship
roleSchema.virtual('users', {
    ref: 'User',
    localField: "_id",
    foreignField: "role"
})

const Role = mongoose.model('Role', roleSchema)

module.exports = Role