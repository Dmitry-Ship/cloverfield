const express = require('express');
const multer = require('multer');
const path = require('path');
const generateToken = require('../helpers/generateToken');
const handleError = require('../helpers/handleError');
const User = require('../models/User');
const validateInput = require('../helpers/validations/signup');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/');
  },
  filename: (req, file, cb) => {
    cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`);
  },
});

const upload = multer({ storage });
const router = express.Router();

router.post('/', upload.single('avatar'), (req, res) => {
  const { isValid, errors } = validateInput(req.body);

  if (!isValid) {
    return res.status(400).send(errors);
  }

  const { email, password, username, fullName } = req.body;
  const { file } = req;


  return User.findOne({ email }, (err, user) => {
    if (err) { return handleError(res, err); }
    if (user) {
      return handleError(res, { email: 'That email address is already in use.' }, 422);
    }
    const newUser = new User({
      email,
      password,
      username,
      fullName,
      userpic: file.filename,
    });

    return newUser.save((saveErr, result) => {
      if (saveErr) { return handleError(res, saveErr, 400); }

      const token = generateToken(result);

      return res.json({ token: `Bearer ${token}` });
    });
  });
});

module.exports = router;
