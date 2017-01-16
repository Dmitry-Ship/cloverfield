const express = require('express');

const router = express.Router();
const jwt = require('jsonwebtoken');
const config = require('../config/main');

router.post('/', (req, res) => {
  const { user } = req;
  const token = jwt.sign(user, config.secret, {
    expiresIn: 10080,
  });
  res.status(200).json({ token: `JWT ${token}`, user: user });
});

module.exports = router;
