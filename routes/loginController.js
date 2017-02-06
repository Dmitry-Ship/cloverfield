// const express = require('express');
// const generateToken = require('../helpers/generateToken');
//
// const router = express.Router();
//
// router.post('/', (req, res) => {
//   const { user } = req;
//   const token = generateToken(user);
//
//   res.status(200).json({ token: `JWT ${token}`, user });
// });
//
// module.exports = router;
const User = require('../models/User');
const express = require('express');
const generateToken = require('../helpers/generateToken');

const router = express.Router();

router.post('/', (req, res) => {
  const { email, password } = req.body;
  User.findOne({ email }, (err, user) => {
    if (err) { return res.send(err); }
    if (!user) {
      return res.status(400).send('User with this email not found');
    }
    return user.comparePassword(password, (compareErr, isMatch) => {
      if (compareErr) { return res.send(compareErr); }
      if (!isMatch) {
        return res.status(400).send('Incorrect password');
      }
      const token = generateToken(user);
      return res.status(200).json({ token: `JWT ${token}`, user });
    });
  });
});

module.exports = router;
