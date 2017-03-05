const express = require('express');
const notesController = require('./notesController');
const loginController = require('./loginController');
const signupController = require('./signupController');
const userController = require('./userController');
const imagesController = require('./imagesController');
const isLoggedIn = require('./isLoggedIn');

const router = express.Router();

router.use('/api/notes', isLoggedIn, notesController);
router.use('/api/user', isLoggedIn, userController);
router.use('/api/image', isLoggedIn, imagesController);
router.use('/api/login', loginController);
router.use('/api/signup', signupController);

module.exports = router;
