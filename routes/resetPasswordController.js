const User = require('../models/User');
const express = require('express');
const validateInput = require('../helpers/validations/resetPassword');

const router = express.Router();

router.get('/:token', (req, res) => {
  User.findOne({
    $and: [
      { resetPasswordToken: req.params.token },
      { resetPasswordExpires: { $gt: Date.now() } },
    ],
  }, (err, user) => {
    if (err) { return res.send(err); }
    if (!user) {
      return res.status(400).send('Token expired or is invalid');
    }
    res.end();
  });
});

router.put('/:token', (req, res) => {
  const { isValid, errors } = validateInput(req.body);

  if (!isValid) {
    return res.status(400).send(errors);
  }
  const { password } = req.body;

  User.findOne({
    $and: [
      { resetPasswordToken: req.params.token },
      { resetPasswordExpires: { $gt: Date.now() } },
    ],
  },
  (err, user) => {
    if (err) { return res.send(err); }
    if (!user) {
      return res.status(400).send('Token expired or is invalid');
    }

    user.password = password;
    user.resetPasswordExpires = undefined;
    user.resetPasswordToken = undefined;

    user.save((err) => {
      if (err) { return res.status(500).json({ error: 'something went wrong' }); }
      res.end();
    });
  });
});

module.exports = router;