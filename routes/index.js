const passportService = require('../config/passport'); // why does this work????
const passport = require('passport');
const manageNotes = require('./ManageNotes');
const manageLogin = require('./ManageLogin');
const manageSignUp = require('./ManageSignUp');
const manageUser = require('./ManageUser');
const manageImages = require('./ManageImages');

const requireAuth = (req, res, next) => {
  passport.authenticate('jwt', { session: false }, (err, user) => {
    if (err) { return next(err); }
    if (!user) { return res.status(400).send('Not Authorized'); }

    req.user = user;
    return next();
  })(req, res, next);
};

const requireLogin = (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) { return next(err); }
    if (!user) { return res.status(400).send(info.message); }
    return req.logIn(user, { session: false }, (err) => {
      if (err) { return next(err); }
      return next();
    });
  })(req, res, next);
};

module.exports = (app) => {
  app.use('/notes', requireAuth, manageNotes);
  app.use('/user', requireAuth, manageUser);
  app.use('/image', manageImages);
  app.use('/login', requireLogin, manageLogin);
  app.use('/signup', manageSignUp);
};
