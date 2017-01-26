const express = require('express');
const generateToken = require('../helpers/generateToken');

const router = express.Router();

router.post('/', (req, res) => {
  const { user } = req;
  const token = generateToken(user);

  res.status(200).json({ token: `JWT ${token}`, user });
});

module.exports = router;
