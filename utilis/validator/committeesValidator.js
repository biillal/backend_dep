const { check, body } = require("express-validator");
const validatorMiddleware = require("../../middleware/validatorMiddleware");


exports.getAllCommitteesValidatore = [
    check('id').isMongoId().withMessage('Invalid User id'),
    validatorMiddleware
]


exports.createCommitteesValidator = [
    check('name')
        .notEmpty()
        .withMessage('name is required')
    ,
    check('categoryCmt')
        .notEmpty()
        .withMessage('category committees is required'),
    validatorMiddleware
]

exports.updateCommitteesValidator = [
    check('id').isMongoId().withMessage('Invalid product id'),
    validatorMiddleware
]

exports.deleteCommitteesValidator = [
    check('id').isMongoId().withMessage('Invalid product id'),
    validatorMiddleware
]
