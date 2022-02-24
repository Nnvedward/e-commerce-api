const UserServ = require('../services/user.service')
const response = require('../utils/response')

class UserController {
    async create(req, res) {
        const result = await UserServ.create(req.body)
        res.status(201).send(response('User created', result))
    }
}

module.exports = new UserController()