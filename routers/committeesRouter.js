const { createCommitte, getCommittees, deleteCommittees, updateCommittes, getSingleCommittees } = require('../controullers/committeesCntrl')
const validateObj = require('../middleware/validateObj')
const { createCommitteesValidator, getAllCommitteesValidatore, deleteCommitteesValidator, updateCommitteesValidator } = require('../utilis/validator/committeesValidator')

const router = require('express').Router()


router.route('/createCommittees').post(createCommitteesValidator,createCommitte)
router.route('/getAllCommittees').get(getCommittees)
router.route('/deleteCommittees/:id').delete(deleteCommitteesValidator,deleteCommittees)
router.route('/updateCommittees/:id').put(validateObj,updateCommittes)
router.route('/committees/:id').get(validateObj,getSingleCommittees)


module.exports = router