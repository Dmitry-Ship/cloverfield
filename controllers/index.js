const express = require('express');
const notesController = require('./notesController');
const loginController = require('./loginController');
const signupController = require('./signupController');
const userController = require('./userController');
const forgotPasswordController = require('./forgotPasswordController');
const resetPasswordController = require('./resetPasswordController');
const requireAuth = require('../middleware/requireAuth');
const { notesURL, userURL, loginURL, signUpURL, resetPasswordURL, forgotPasswordURL } = require('../config/urls');

const router = express.Router();

router.use(notesURL, requireAuth, notesController);
router.use(userURL, requireAuth, userController);
router.use(loginURL, loginController);
router.use(signUpURL, signupController);
router.use(forgotPasswordURL, forgotPasswordController);
router.use(resetPasswordURL, resetPasswordController);

module.exports = router;
