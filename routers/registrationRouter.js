const { createRegistration, fetchAllUsers, deleteUser } = require('../controullers/registrationCntrl')
const upload = require('../utilis/uploadConfig');

const router = require('express').Router()


router.route('/createRegistration').post(upload.single('file'),createRegistration)
router.route('/fetchAllRegistration').get(fetchAllUsers)
router.route('/delet-user/:id').delete(deleteUser)



module.exports = router