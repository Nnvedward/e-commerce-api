const express = require('express')
const router = new express.Router()
const UserCtrl = require('../controllers/user.controller')

router.post('/create', UserCtrl.create)

module.exports = router