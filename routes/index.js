const express = require('express');
const path = require('path');
const notesController = require('./notesController');
const loginController = require('./loginController');
const signupController = require('./signupController');
const userController = require('./userController');
const imagesController = require('./imagesController');
const isLoggedIn = require('./isLoggedIn');

const router = express.Router();

router.use('/notes', isLoggedIn, notesController);
router.use('/user', isLoggedIn, userController);
router.use('/image', isLoggedIn, imagesController);
router.use('/login', loginController);
router.use('/signup', signupController);

module.exports = router;
