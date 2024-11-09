// uploadConfig.js
const multer = require('multer');
const path = require('path');

// Configure storage with Multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Specify folder to temporarily store files
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Rename file
  },
});

// Filter for allowed file types (PDF and Word)
const fileFilter = (req, file, cb) => {
  const allowedFileTypes = /pdf|doc|docx/;
  const mimeType = allowedFileTypes.test(file.mimetype);

  if (mimeType) {
    cb(null, true);
  } else {
    cb(new Error('Invalid file type. Only PDF and Word documents are allowed.'), false);
  }
};

const upload = multer({ storage, fileFilter });

module.exports = upload;
