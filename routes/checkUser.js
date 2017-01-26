const passport = require('passport');
const passportService = require('../config/passport'); // why does this work????
const handleError = require('../helpers/handleError');

const checkUser = (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) { return handleError(res, err); }
    if (!user) { return handleError(res, info.message, 400); }
    return req.logIn(user, { session: false }, (err) => {
      if (err) { return handleError(res, err); }
      return next();
    });
  })(req, res, next);
};

module.exports = checkUser;
