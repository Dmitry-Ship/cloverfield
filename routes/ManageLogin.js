const express = require('express');

const router = express.Router();

const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const User = require('../models/User');

passport.use('login', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    // passReqToCallback: true,
  },
  (email, password, done) => {
    User.findOne({ email: email }, (err, user) => {
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, { message: 'Incorrect email.' });
      }
      if (!user.validPassword(password)) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, user);
    });
  }
));


passport.serializeUser((user, done) => {
  done(null, user._id);
});
passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user);
  });
});


router.post('/', (req, res, next) => {
  passport.authenticate('login', (err, user) => {
    if (err) { return next(err); }
    if (!user) { return res.send({ redirect: '/#/login' }); }
    return req.logIn(user, (err) => {
      if (err) { return next(err); }
      return res.send({ redirect: '/' });
    });
  })(req, res, next);
});

module.exports = router;
