const mongoose = require('mongoose')

const rolePermissionSchema = new mongoose.Schema({
    roleId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Role'
    },
    permissionId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Permission'
    }
})

const RolePermission = mongoose.model('RolePermission', rolePermissionSchema)

module.exports = RolePermission