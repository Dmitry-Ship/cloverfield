const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const passport = require('passport');
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
