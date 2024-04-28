const { createDownload, getAllDownload, deleteDownload, updateDownload } = require('../controullers/downloadCntrl')
const uploads = require('../middleware/uploadImg')

const router = require('express').Router()


router.route('/create').post(uploads.single('file'),createDownload)
router.route('/').get(getAllDownload)
router.route('/:id')
                .delete(deleteDownload)
                .put(updateDownload)
                    



module.exports = router