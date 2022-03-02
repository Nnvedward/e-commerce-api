const RoleServ = require('../services/role.service')
const response = require('../utils/response')

class RoleController {
    async createRole(req, res) {
        const result = await RoleServ.createRole(req.body)
        res.status(201).send(response('Role created', result))
    }

    async getRole(req, res) {
        const result = await RoleServ.getRole(req.params.roleId)
        res.status(200).send(response('Role data', result))
    }

    async createPermission(req, res) {
        const result = await RoleServ.createPermission(req.body)
        res.status(201).send(response('Permission created', result))
    }

    async managePermission(req, res) {
        const result = await RoleServ.managePermission(req.params.roleId)
        res.status(200).send(response('Role permission', result))
    }
}

module.exports = new RoleController()