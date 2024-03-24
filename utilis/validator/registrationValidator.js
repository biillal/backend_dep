const { check, body } = require("express-validator");
const validatorMiddleware = require("../../middleware/validatorMiddleware");


exports.getAllRegistrationValidatore = [
    check('id').isMongoId().withMessage('Invalid User id'),
    validatorMiddleware
]


exports.createRegistrationValidator = [
    check('name')
        .notEmpty()
        .withMessage('name is required')
    ,
    check('categoryCmt')
        .notEmpty()
        .withMessage('category Registration is required'),
    validatorMiddleware
]

exports.updateRegistrationValidator = [
    check('id').isMongoId().withMessage('Invalid product id'),
    validatorMiddleware
]

exports.deleteRegistrationValidator = [
    check('id').isMongoId().withMessage('Invalid product id'),
    validatorMiddleware
]
