const User = require('../models/User');
const express = require('express');
const generateToken = require('../helpers/generateToken');
const validateInput = require('../helpers/validations/login');

const router = express.Router();

router.post('/', (req, res) => {
  const { isValid, errors } = validateInput(req.body);

  if (!isValid) {
    return res.status(400).send(errors);
  }
  const { email, password } = req.body;


  User.findOne({ email }, (err, user) => {
    if (err) { return res.send(err); }
    if (!user) {
      return res.status(400).send({ email: 'User with this email not found' });
    }
    return user.comparePassword(password, (compareErr, isMatch) => {
      if (compareErr) { return res.send(compareErr); }
      if (!isMatch) {
        return res.status(400).send({ password: 'Incorrect password' });
      }
      const token = generateToken(user);
      return res.status(200).json({ token: `Bearer ${token}` });
    });
  });
});

module.exports = router;
