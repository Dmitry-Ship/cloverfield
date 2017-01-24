const express = require('express');
const multer = require('multer');
const path = require('path');
const generateToken = require('../helpers/generateToken');
const User = require('../models/User');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/');
  },
  filename: (req, file, cb) => {
    cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`);
  }
});

const upload = multer({ storage });
const router = express.Router();

router.post('/', upload.single('avatar'), (req, res, next) => {
  const { email, password, username } = req.body;
  const { file } = req;

  if (!email) {
    return res.status(422).send('You must enter an email address.');
  }

  if (!password) {
    return res.status(422).send('You must enter a password.');
  }

  return User.findOne({ email }, (err, user) => {
    if (err) { return next(err); }
    if (user) {
      return res.status(422).send('That email address is already in use.');
    }
    const newUser = new User({ email, password, username, userpic: file.filename });

    return newUser.save((saveErr, result) => {
      if (saveErr) { return next(saveErr); }

      const token = generateToken(result);

      return res.json({ token: `JWT ${token}`, user: result });
    });
  });
});

module.exports = router;
