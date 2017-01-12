const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const passport = require('passport');
const LocalStrategy = require('passport-local');
const User = require('../models/User');
const config = require('./main');

// const opts = {};
// opts.jwtFromRequest = ExtractJwt.fromAuthHeader();
// opts.secretOrKey = config.secret;
passport.use(new JwtStrategy({
  jwtFromRequest: ExtractJwt.fromAuthHeader(),
  secretOrKey: config.secret,
}, (jwtPayload, done) => {
  User.findById(jwtPayload._id, (err, user) => {
    if (err) {
      return done(err, false);
    }
    if (user) {
      done(null, user);
    } else {
      done(null, false);
    }
  });
}));


passport.use(new LocalStrategy({
  usernameField: 'email',
},
  (email, password, done) => {
    User.findOne({ email: email }, (err, user) => {
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, { error: 'Incorrect email.' });
      }
      user.comparePassword(password, (err, isMatch) => {
        if (err) { return done(err); }
        if (!isMatch) { return done(null, false, { error: 'Your login details could not be verified. Please try again.' }); }

        return done(null, user);
      });
    });
  })
);
