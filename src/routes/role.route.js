const router = require('express').Router()
const Role = require('../models/role.model')

router.post('/role', async (req, res) => {
    const newRole = await new Role(req.body)
    try{
        await newRole.save()
        res.status(200).send(newRole)
    }catch(e) {
        res.status(500).send(e)
    }
})

module.exports = router