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
    .then((user) => {
      user.comparePassword(req.body.oldPassword, (compareErr, isMatch) => {
        if (compareErr) { return res.send(compareErr); }
        if (!isMatch) {
          console.log('isMatch', isMatch);
          throw new Error('oops!');
          // return res.status(400).send({ oldPassword: 'Incorrect password' });
          // return 'loool';
        }
        user.password = req.body.newPassword;

        return user.save();
      });
    })
    .then((newUser) => { console.log('i was called', newUser); res.send({ newUser }); })
    .catch((err) => { console.log('error occured', err); res.status(400).send(err); });
});

module.exports = router;
