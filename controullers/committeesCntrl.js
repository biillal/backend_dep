const asyncHandler = require('express-async-handler');
const Committees = require('../models/committees');


module.exports.createCommitte = asyncHandler(async (req, res, next) => {
    const { name, role, univ, gender, categoryCmt } = req.body
    const committees = await Committees.create({
        name, role, univ, gender, categoryCmt
    })
    res.status(201).json({ message: 'create committees succusfly' })
})
module.exports.getCommittees = asyncHandler(async (req, res, next) => {
    const committees = await Committees.find({})

    res.status(201).json({ result: committees })
})
module.exports.deleteCommittees = asyncHandler(async (req, res, next) => {
    const committees = await Committees.findByIdAndDelete(req.params.id)

    if (!committees) {
        res.status(404).json({ message: "committees not found" })
    }
    res.status(200).json({ message: "delete successfully" })
})