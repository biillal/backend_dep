const asyncHandler = require('express-async-handler');
const { Registration } = require('../models/registration');
const fs = require('fs')
const path = require('path')
module.exports.createRegistration = asyncHandler(async(req,res,next)=>{
    const {nom,prenom,institution,institutionAddress,ville,phone,email,gender,topic} = req.body
    const filename = req.file.filename
    const registration = await Registration.create({
        nom,prenom,institution,institutionAddress,ville,phone,email,file:filename,gender,topic
    })
    res.status(201).json({registration,result:"create successfully"})
})


module.exports.fetchAllUsers = asyncHandler(async(req,res,next)=>{
    const users = await Registration.find({})
    res.status(201).json({result:users})
})
module.exports.deleteUser  = asyncHandler(async(req,res,next)=>{
    const registration =  await Registration.findByIdAndDelete(req.params.id)
    const imagePath = path.join(__dirname, `../files/${registration.file}`)
    console.log(registration.file);
    res.status(201).json({result:"deleted successfully"})
    fs.unlinkSync(imagePath)
})