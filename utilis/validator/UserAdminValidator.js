const { check } = require('express-validator')
const validatorMiddleware = require("../../middleware/validatorMiddleware");
const { Admin } = require('../../models/userAdmin');


exports.signupAdminValidator = [
    check("name")
        .notEmpty()
        .withMessage('name is required'),
    check("lastname")
        .notEmpty()
        .withMessage('lastname is required'),
    check('email')
        .notEmpty()
        .withMessage('email is required')
        .isEmail()
        .withMessage('invalid email address')
        .custom(async value => {
            const user = await Admin.findOne({ email: value })
            if (user) {
                throw new Error("E-mail already in use")
            }
        }),
    check('password')
        .notEmpty()
        .withMessage('password is required')
        .isLength({ min: 6 })
        .withMessage('password must be at least 6 characters')
        .custom((password, { req }) => {
            if (password != req.body.passwordConfirm) {
                throw new Error('Password confirmation incorrect')
            }
            return true
        }),
    check('passwordConfirm')
        .notEmpty()
        .withMessage('password confirmation is required'),
    validatorMiddleware
];

exports.loginValidatore = [
    check('email')
        .notEmpty()
        .withMessage('username is required')
        .isEmail()
        .withMessage('Invalid email address'),
    check('password')
        .notEmpty()
        .withMessage('password is required'),
    validatorMiddleware
]