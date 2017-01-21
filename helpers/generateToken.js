const jwt = require('jsonwebtoken');
const config = require('../config/main');

module.exports = (user) => {
  return jwt.sign({ _id: user._id }, config.secret, { expiresIn: 10080 });
};
