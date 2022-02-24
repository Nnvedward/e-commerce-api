const User = require('../models/user.model')

class UserService {
    async create(data) {
        return await new User(data).save()
    }
}

module.exports = new UserService()