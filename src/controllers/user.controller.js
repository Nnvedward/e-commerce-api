const UserServ = require('../services/user.service')
const response = require('../utils/response')

class UserController {
    async update(req, res) {
        const result = await UserServ.update(req.params.userId, req.body)
        res.status(201).send(response('User updated successfully!', result))
    }
}

module.exports = new UserController()