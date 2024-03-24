const { createCommitte, getCommittees, deleteCommittees } = require('../controullers/committeesCntrl')
const { createCommitteesValidator, getAllCommitteesValidatore, deleteCommitteesValidator } = require('../utilis/validator/committeesValidator')

const router = require('express').Router()


router.route('/createCommittees').post(createCommitteesValidator,createCommitte)
router.route('/getAllCommittees').get(getCommittees)
router.route('/deleteCommittees/:id').delete(deleteCommitteesValidator,deleteCommittees)


module.exports = router