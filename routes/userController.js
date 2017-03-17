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
  User.findById(req.user._id)
    .then(user => res.status(200).json(user))
    .catch(err => handleError(res, err, 404));
});


router.put('/', upload.single('avatar'), (req, res) => {
  const { isValid, errors } = validateInput(req.body);

  if (!isValid) { return res.status(400).send(errors); }

  if (req.file) { req.body.userpic = req.file.filename; }

  User.findOneAndUpdate({ _id: req.user._id },
    req.body,
    { new: true, upsert: true })
    .then(user => res.send(user))
    .catch(err => handleError(res, err, 422));
});


router.put('/password', (req, res) => {
  const { isValid, errors } = validatePasswords(req.body);

  if (!isValid) { return res.status(400).send(errors); }

  return User.findById(req.user._id)
    .then((user) => {
      user.comparePassword(req.body.oldPassword, (compareErr, isMatch) => {
        if (compareErr) { return res.send(compareErr); }
        if (!isMatch) {
          return res.status(400).send({ oldPassword: 'Incorrect password' });
        }
        user.password = req.body.newPassword;

        return user.save();
      });
    })
    .then(newUser => res.send(newUser))
    .catch(err => res.send(err));

});

module.exports = router;
