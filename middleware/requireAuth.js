const jwt = require('jsonwebtoken');
const { secret } = require('../config/main');
const User = require('../models/User');

module.exports = (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(403).json({ error: 'No token provided' });
  }

  const token = req.headers.authorization.split(' ')[1];

  jwt.verify(token, secret, (err, decoded) => {
    if (err) { return res.status(401).json({ error: 'failed to authenticate' }); }
    User.findById(decoded, (err, user) => {
      if (err) { return res.status(401).json({ error: 'failed to authenticate' }); }
      if (!user) { return res.status(404).json({ error: 'user not found' }); }

      req.user = user;
      next();
    });
  });
};
