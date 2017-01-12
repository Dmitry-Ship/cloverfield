const express = require('express');

const router = express.Router();
const jwt = require('jsonwebtoken');
const config = require('../config/main');
const User = require('../models/User');

router.post('/', (req, res, next) => {
  User.findOne({ email: req.body.email }, (err, user) => {
    if (err) { return next(err); }
    if (user) {
      res.send({ message: 'email is already taken' });
    }
    const newUser = new User({
      email: req.body.email,
      password: req.body.password,
    });

    newUser.save((err, user) => {
      if (err) { return next(err); }

      const token = jwt.sign(user, config.secret, {
        expiresIn: 10080,
      });

      res.json({ token: `JWT ${token}` });
    });
  });
});

module.exports = router;
