const express = require('express');

const router = express.Router();
const User = require('../models/User');

router.get('/:id', (req, res, next) => {
  const userId = req.params.id;

  if (req.user._id.toString() !== userId) { return res.status(401).json({ error: 'You are not authorized to view this user profile.' }); }

  User.findById(userId, (err, user) => {
    if (err) {
      res.status(400).json({ error: 'No user could be found for this ID.' });
      return next(err);
    }

    return res.status(200).json({ user: user });
  });
});

module.exports = router;
