const { createAdmin, login, fetchAllAdmin, deleteAdmin } = require('../controullers/UserAdminCntrl');
const { verifyTokenAndAdmin, verifyToken } = require('../middleware/jwtToken');
const { signupAdminValidator, loginValidatore } = require('../utilis/validator/UserAdminValidator')

const router = require('express').Router()


router.route('/create-admin').post(signupAdminValidator,createAdmin);
router.route('/login').post(loginValidatore,login);
router.route('/fetchAllAdmin').get(fetchAllAdmin);
router.route('/admin/:id').delete(deleteAdmin);



module.exports = router