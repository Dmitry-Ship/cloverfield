const express = require('express');

const router = express.Router();

const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const User = require('../models/User');

passport.use('signup', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    // passReqToCallback: true,
  },
  (email, password, done) => {
    process.nextTick(() => {
      User.findOne({ email: email }, (err, user) => {
        if (err) { return done(err); }
        if (user) {
          return done(null, false, { message: 'That email is already taken.' });
        }
        const newUser = new User();
        newUser.email = email;
        newUser.password = newUser.generateHash(password);
        newUser.save((err) => {
          if (err) {
            throw err// res.send('error adding user');
          } else {
            return done(null, newUser);
          }
        });
      });
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
  passport.authenticate('signup', (err, user) => {
    if (err) { return next(err); }
    // if (user) { return res.send({ redirect: '/#/about' }); }
    return req.logIn(user, (err) => {
      if (err) { return next(err); }
      return res.send({ redirect: '/' });
    });
  })(req, res, next);
});

module.exports = router;
