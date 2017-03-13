const express = require('express');
const notesController = require('./notesController');
const loginController = require('./loginController');
const signupController = require('./signupController');
const userController = require('./userController');
const forgotPasswordController = require('./forgotPasswordController');
const resetPasswordController = require('./resetPasswordController');
const requireAuth = require('../middleware/requireAuth');

const router = express.Router();

router.use('/api/notes', requireAuth, notesController);
router.use('/api/user', requireAuth, userController);
router.use('/login', loginController);
router.use('/signup', signupController);
router.use('/forgotpassword', forgotPasswordController);
router.use('/resetpassword', resetPasswordController);

module.exports = router;
