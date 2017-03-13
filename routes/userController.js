const express = require('express');
const multer = require('multer');
const path = require('path');
const User = require('../models/User');
const handleError = require('../helpers/handleError');
const validateInput = require('../helpers/validations/signup');

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`);
  },
});
const upload = multer({ storage });

router.get('/', (req, res) => {
  User.findById(req.user._id, (err, user) => {
    if (err) handleError(res, err, 404);
    else res.status(200).json(user);
  });
});


router.put('/', upload.single('avatar'), (req, res) => {
  const { isValid, errors } = validateInput(req.body);

  if (!isValid) { return res.status(400).send(errors); }

  if (req.file) { req.body.userpic = req.file.filename; }

  User.findOneAndUpdate({ _id: req.user._id },
    req.body,
    { new: true, upsert: true },
    (err, user) => {
      if (err) handleError(res, err, 422);
      else res.send(user);
    });
});

module.exports = router;
