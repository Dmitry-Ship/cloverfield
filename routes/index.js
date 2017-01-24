const passportService = require('../config/passport'); // why does this work????
const express = require('express');
const passport = require('passport');
const manageNotes = require('./ManageNotes');
const manageLogin = require('./ManageLogin');
const manageSignUp = require('./ManageSignUp');
const manageUser = require('./ManageUser');
const manageImages = require('./ManageImages');

const path = require('path');

const router = express.Router();

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

const indexFile = path.join(__dirname, '../index.html');

router.get('/', (req, res) => res.sendFile(indexFile));
router.use('/notes', requireAuth, manageNotes);
router.use('/user', requireAuth, manageUser);
router.use('/image', requireAuth, manageImages);
router.use('/login', requireLogin, manageLogin);
router.use('/signup', manageSignUp);

module.exports = router;
