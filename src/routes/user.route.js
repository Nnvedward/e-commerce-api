const router = require('express').Router()
const UserCtrl = require('../controllers/user.controller')
const { auth } = require('../middlewares/auth.middleware')

router.patch('/:userId', auth, UserCtrl.update)

module.exports = router