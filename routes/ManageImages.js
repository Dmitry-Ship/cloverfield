const express = require('express');
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads/');
  },
  filename: (req, file, cb) => {
    console.log(file);
    cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`);
  }
});

const upload = multer({ storage });
const router = express.Router();

router.post('/', upload.single('avatar'), (req, res) => {
  console.log(req.file);
  res.send('success!');
});

module.exports = router;
