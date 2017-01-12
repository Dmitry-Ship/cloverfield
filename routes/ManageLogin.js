const express = require('express');

const router = express.Router();
const jwt = require('jsonwebtoken');
const config = require('../config/main');
const passportService = require('../config/passport'); //why does this work????
const passport = require('passport');
const User = require('../models/User');

const requireLogin = passport.authenticate('local', { session: false });

router.post('/', requireLogin, (req, res) => {
  User.findOne({ email: req.body.email }, (err, user) => {
    if (err) throw err;
    if (!user) {
      res.send({ message: 'User not found' });
    } else {
      user.comparePassword(req.body.password, (err, isMatch) => {
        if (!err && isMatch) {
          const token = jwt.sign(user, config.secret, {
            expiresIn: 10080,
          });
          res.json({ token: `JWT ${token}` });
        } else {
          res.send({ message: 'Incorrect Password' });
        }
      });
    }
  });
});

module.exports = router;
