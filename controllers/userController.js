const express = require('express');
const multer = require('multer');
const User = require('../models/User');
const handleError = require('../helpers/handleError');
const validatePasswords = require('../helpers/validations/changePassword');
const validateProfile = require('../helpers/validations/editProfile');
const cloudinary = require('cloudinary');
const cloudinaryConfig = require('../config/cloudinary');

cloudinaryConfig(cloudinary);
const router = express.Router();
const storage = multer.memoryStorage();
const upload = multer({ storage });

router.get('/', (req, res) => {
  User.findById(req.user._id)
    .then(user => res.status(200).json({ user }))
    .catch(err => handleError(res, err, 404));
});


router.put('/', upload.single('avatar'), (req, res) => {
  const { isValid, errors } = validateProfile(req.body);

  if (!isValid) { return res.status(400).send(errors); }

  if (req.file) {
    return cloudinary.uploader.upload_stream((result) => {
      req.body.userpic = result.url;

      User.findByIdAndUpdate(req.user._id,
        req.body,
        { new: true, upsert: true })
        .then(user => res.send({ user }))
        .catch(err => handleError(res, err, 422));
    })
      .end(req.file.buffer);
  }

  User.findByIdAndUpdate(req.user._id,
    req.body,
    { new: true, upsert: true })
    .then(user => res.send({ user }))
    .catch(err => handleError(res, err, 422));
});


router.put('/password', (req, res) => {
  const { isValid, errors } = validatePasswords(req.body);

  if (!isValid) { return res.status(400).send(errors); }

  return User.findById(req.user._id)
    .exec((err, user) => {
      if (!user) {
        return handleError(res, 'user not found', 404);
      }

      return user.comparePassword(req.body.oldPassword, (compareErr, isMatch) => {
        if (compareErr) { return res.send(compareErr); }
        if (!isMatch) {
          return handleError(res, { oldPassword: 'Incorrect password' }, 400);
        }

        user.password = req.body.newPassword;

        return user.save()
          .then(newUser => res.send({ newUser }))
          .catch(err => res.status(400).send({ err }));
      });
    });
});

module.exports = router;
