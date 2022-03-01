const JWT = require('jsonwebtoken')
const User = require('../models/user.model')
const Role = require('../models/role.model')
const CustomError = require('../utils/custom-error')

const verifyToken = async (req, res, next) => {
    const token = req.headers.authorization.split(" ")[1]
    if (!token) throw new CustomError('Unauthorized access: Token not found!', 401)

    const decoded = JWT.verify(token, process.env.JWT_SECRET)
    const user = await User.findOne({ _id: decoded.id, 'tokens.token': token }).populate('role')

    if (!user){
        throw new CustomError('Unauthorized access: User does not exist', 401);
    } 

    req.user = user
    next()
}

const auth = (req, res, next) => {
    verifyToken(req, res, async () => {
        if (req.user.id === req.params.userId || req.user.role.isAdmin) {
            next()
        }
        else {
            throw new CustomError('Unauthorized access!', 401)
        }
    })
}

const authAndAdmin = (req, res, next) => {
    verifyToken(req, res, async () => {
        if (req.user.role.isAdmin) {
            next()
        }
        else {
            throw new CustomError('Unauthorized access!', 401)
        }
    })
}

module.exports = {
    auth,
    authAndAdmin
}