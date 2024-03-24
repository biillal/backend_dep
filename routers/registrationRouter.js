const { createRegistration, fetchAllUsers, deleteUser } = require('../controullers/registrationCntrl')

const router = require('express').Router()


router.route('/createRegistration').post(createRegistration)
router.route('/fetchAllRegistration').get(fetchAllUsers)
router.route('/delet-user/:id').delete(deleteUser)



module.exports = router