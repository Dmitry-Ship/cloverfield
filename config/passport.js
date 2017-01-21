const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const passport = require('passport');
const LocalStrategy = require('passport-local');
const User = require('../models/User');
const config = require('./main');


passport.use(new JwtStrategy({
  jwtFromRequest: ExtractJwt.fromAuthHeader(),
  secretOrKey: config.secret,
}, (jwtPayload, done) => {
  User.findById(jwtPayload._id, (err, user) => {
    if (err) { return done(err, false); }
    if (user) { return done(null, user); }

    return done(null, false);
  });
}));


passport.use(new LocalStrategy({
  usernameField: 'email',
},
  (email, password, done) => {
    User.findOne({ email }, (err, user) => {
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, { message: 'Incorrect email.' });
      }
      return user.comparePassword(password, (compareErr, isMatch) => {
        if (compareErr) { return done(compareErr); }
        if (!isMatch) { return done(null, false, { message: 'Incorrect password.' }); }

        return done(null, user);
      });
    });
  })
);
