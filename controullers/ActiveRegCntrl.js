const asyncHandler = require('express-async-handler');
const { ActiveRegistation } = require('../models/activeRegistration');


module.exports.create = asyncHandler(async(req,res,next)=>{
    await ActiveRegistation.create({})
})

module.exports.active = asyncHandler(async (req, res, next) => {
    const active = false
    const activeId = await ActiveRegistation.findOne({active:active})
    const id = activeId._id
    const activeReg = await ActiveRegistation.findByIdAndUpdate(
        { _id: id },
        {
            active: true
        },
        {
            new: true
        }
    )

    res.status(201).json({message:"registration is active"})
})


module.exports.désactive = asyncHandler(async (req, res, next) => {
    const active = true
    const activeId = await ActiveRegistation.findOne({active:active})
    const id = activeId._id
    await ActiveRegistation.findByIdAndUpdate(
        { _id: id },
        {
            active: false
        },
        {
            new: true
        }
    )

    res.status(201).json({message:"registration is desactive"})
})



module.exports.getActive = asyncHandler(async(req,res,next)=>{
    const active = await ActiveRegistation.findOne()
    res.status(201).json(active)
})