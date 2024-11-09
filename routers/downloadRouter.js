const { createDownload, getAllDownload, deleteDownload, updateDownload } = require('../controullers/downloadCntrl')
const upload = require('../utilis/uploadConfig');

const router = require('express').Router()


router.route('/create').post(upload.single('file'),createDownload)
router.route('/').get(getAllDownload)
router.route('/:id')
                .delete(deleteDownload)
                .put(updateDownload)
                    



module.exports = router