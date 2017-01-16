const passportService = require('../config/passport'); // why does this work????
const passport = require('passport');
const manageNotes = require('./ManageNotes');
const manageLogin = require('./ManageLogin');
const manageSignUp = require('./ManageSignUp');
const manageUser = require('./ManageUser');

const requireAuth = passport.authenticate('jwt', { session: false });
const requireLogin = passport.authenticate('local', { session: false });

module.exports = (app) => {
  app.use('/notes', manageNotes);
  app.use('/user', requireAuth, manageUser);
  app.use('/login', requireLogin, manageLogin);
  app.use('/signup', manageSignUp);
};
