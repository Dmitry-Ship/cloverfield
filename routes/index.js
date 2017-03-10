const express = require('express');
const notesController = require('./notesController');
const loginController = require('./loginController');
const signupController = require('./signupController');
const userController = require('./userController');
const imagesController = require('./imagesController');
const requireAuth = require('../middleware/requireAuth');

const router = express.Router();

router.use('/api/notes', requireAuth, notesController);
router.use('/api/user', requireAuth, userController);
router.use('/api/image', requireAuth, imagesController);
router.use('/login', loginController);
router.use('/signup', signupController);

module.exports = router;
