const express = require('express');

const router = express.Router();
const User = require('../models/User');
const handleError = require('../helpers/handleError');

router.get('/', (req, res) => {
  User.findById(req.user._id, (err, user) => {
    if (err) handleError(res, err, 404);
    else res.status(200).json(user);
  });
});

module.exports = router;
