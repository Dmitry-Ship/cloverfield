const express = require('express');

const router = express.Router();
const User = require('../models/User');

router.get('/', (req, res, next) => {
  User.findById(req.user._id, (err, user) => {
    if (err) {
      res.status(400).json({ error: 'No user could be found for this ID.' });
      return next(err);
    }

    return res.status(200).json(user);
  });
});

module.exports = router;
