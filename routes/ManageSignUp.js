const express = require('express');
const generateToken = require('../helpers/generateToken');

const router = express.Router();

const User = require('../models/User');

router.post('/', (req, res, next) => {
  const { email, password } = req.body;

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
    const newUser = new User({ email, password });

    return newUser.save((saveErr, result) => {
      if (saveErr) { return next(saveErr); }

      const token = generateToken(result);

      return res.json({ token: `JWT ${token}`, user: result });
    });
  });
});

module.exports = router;
