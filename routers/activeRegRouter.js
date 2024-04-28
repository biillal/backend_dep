const { active, désactive, getActive, create } = require('../controullers/ActiveRegCntrl')

const router = require('express').Router()


router.route('/active').put(active)
router.route('/desactive').put(désactive)
router.route('/').get(getActive)
router.route('/create').post(create)


module.exports =router