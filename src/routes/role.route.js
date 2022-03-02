const router = require('express').Router()
const RoleCtrl = require('../controllers/role.controller')

router.post('/role', RoleCtrl.createRole)
router.get('/:roleId', RoleCtrl.getRole)
router.post('/permission', RoleCtrl.createPermission)
router.get('/manage-permission/:roleId', RoleCtrl.managePermission)

module.exports = router