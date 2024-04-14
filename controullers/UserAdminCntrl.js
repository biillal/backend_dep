const asyncHandler = require('express-async-handler');
const { Admin } = require('../models/userAdmin');
const bcrypt = require('bcrypt');
const ApiError = require('../utilis/apiError');

const createToken = (id, role) => {
    return jwt.sign({ id, role }, process.env.SECRET_KEY, {
        
    })
}

module.exports.createAdmin = asyncHandler(async(req,res,next)=>{
    const {name,lastname,email,password} = req.body;
    const admins = await Admin.create({
        name,
        lastname,
        email,
        password,
    });
    res.status(201).json({message:"register successfully",admins})
})



module.exports.login = asyncHandler(async(req,res,next)=>{
    const user = await Admin.findOne({email:req.body.email})

    if(!user || !(await bcrypt.compare(req.body.password,user.password))){
        return next(new ApiError('Incorrect email or password',401))
    }
    const token = user.generateAuthToken();

    res.status(201).json({user,token})

})


module.exports.fetchAllAdmin = asyncHandler(async(req,res,next)=>{
    const admins = await Admin.find({})
    res.status(201).json({admins})
})