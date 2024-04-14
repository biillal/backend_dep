const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');
const { Admin } = require('../models/userAdmin');
const ApiError = require('../utilis/ApiError');
const verifyToken = async (req, res, next) => {
    const authToken = req.headers.authorization
    if (authToken) {
        const token = authToken.split(" ")[1]
        try {
            const decodedPayload = jwt.verify(token, process.env.SECRET_KEY)
            req.user = decodedPayload
            const currentUser = await Admin.findById(decodedPayload.id)
            if (!currentUser) {
                return next(new ApiError('the user that belong to this token does no longer exist', 401))
            }
            next()
        } catch (error) {
            return next(new ApiError('Invalid token, access denied', 401))
        }
    } else {
        return next(new ApiError('no token provided, access denied', 401))
    }
}


function verifyTokenAndAdmin(req,res,next){
    verifyToken(req,res,()=>{
        if(req.user.isAdmin){
            console.log(req.user.isAdmin);
            next()
        }else{
            res.status(403).json({message:'not allowed , only admin'})
        }
    })
}


module.exports = {
    verifyToken,
    verifyTokenAndAdmin
}
