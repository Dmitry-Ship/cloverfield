const passport = require('passport');
const passportService = require('../config/passport'); // why does this work????
const handleError = require('../helpers/handleError');

const isLoggedIn = (req, res, next) => {
  passport.authenticate('jwt', { session: false }, (err, user) => {
    if (err) { return handleError(res, 'Token check failed', 401); }
    if (!user) { return res.status(401).send('Not Authorized'); }

    req.user = user;
    return next();
  })(req, res, next);
};

module.exports = isLoggedIn;
