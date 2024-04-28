const { createRegistration, fetchAllUsers, deleteUser } = require('../controullers/registrationCntrl')
const uploads = require('../middleware/uploadImg')
const { upload } = require('../multer')

const router = require('express').Router()


router.route('/createRegistration').post(uploads.single('file'),createRegistration)
router.route('/fetchAllRegistration').get(fetchAllUsers)
router.route('/delet-user/:id').delete(deleteUser)



module.exports = router