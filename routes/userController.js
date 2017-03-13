const express = require('express');
const multer = require('multer');
const path = require('path');
const User = require('../models/User');
const handleError = require('../helpers/handleError');
const validateInput = require('../helpers/validations/signup');
const validatePasswords = require('../helpers/validations/changePassword');

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


router.put('/password', (req, res) => {
  const { isValid, errors } = validatePasswords(req.body);

  if (!isValid) { return res.status(400).send(errors); }

  return User.findOne({ _id: req.user._id }, (err, user) => {
    if (err) { return res.send(err); }
    return user.comparePassword(req.body.oldPassword, (compareErr, isMatch) => {
      if (compareErr) { return res.send(compareErr); }
      if (!isMatch) {
        return res.status(400).send({ oldPassword: 'Incorrect password' });
      }
      user.password = req.body.newPassword;

      user.save((err) => {
        if (err) { return res.status(500).json({ error: 'something went wrong' }); }
        res.send(user);
      });
    });
  });
});

module.exports = router;
