const jwt = require('jsonwebtoken');
const { secret } = require('../config/main');

module.exports = ({ _id }) => (
  jwt.sign({ _id }, secret, { expiresIn: '7d' })
);
