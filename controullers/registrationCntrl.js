const asyncHandler = require('express-async-handler');
const { Registration } = require('../models/registration');


module.exports.createRegistration = asyncHandler(async(req,res,next)=>{
    const {nom,prenom,institution,institutionAddress,ville,phone,email} = req.body
    const registration = await Registration.create({
        nom,prenom,institution,institutionAddress,ville,phone,email
    })
    res.status(201).json({result:"create successfully"})
})


module.exports.fetchAllUsers = asyncHandler(async(req,res,next)=>{
    const users = await Registration.find({})
    res.status(201).json({result:users})
})
module.exports.deleteUser  = asyncHandler(async(req,res,next)=>{
    await Registration.findByIdAndDelete(req.params.id)
    res.status(201).json({result:"deleted successfully"})
})