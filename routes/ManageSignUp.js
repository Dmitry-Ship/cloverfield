const express = require('express');

const router = express.Router();
const jwt = require('jsonwebtoken');
const config = require('../config/main');
const User = require('../models/User');

router.post('/', (req, res, next) => {
  const { email } = req.body;
  const { password } = req.body;

  if (!email) {
    return res.status(422).send('You must enter an email address.');
  }

  if (!password) {
    return res.status(422).send('You must enter a password.');
  }

  User.findOne({ email: email }, (err, user) => {
    if (err) { return next(err); }
    if (user) {
      return res.status(422).send('That email address is already in use.');
    }
    const newUser = new User({
      email: email,
      password: password,
    });

    newUser.save((err, user) => {
      if (err) { return next(err); }

      const token = jwt.sign(user, config.secret, {
        expiresIn: 10080,
      });

      res.json({ token: `JWT ${token}`, user: user });
    });
  });
});

module.exports = router;
