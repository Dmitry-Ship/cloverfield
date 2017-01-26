const express = require('express');
const path = require('path');
const notesController = require('./notesController');
const loginController = require('./loginController');
const signupController = require('./signupController');
const userController = require('./userController');
const imagesController = require('./imagesController');
const isLoggedIn = require('./isLoggedIn');
const checkUser = require('./checkUser');

const router = express.Router();
const indexFile = path.join(__dirname, '../index.html');

router.use('/notes', isLoggedIn, notesController);
router.use('/user', isLoggedIn, userController);
router.use('/image', isLoggedIn, imagesController);
router.get('*', (req, res) => res.sendFile(indexFile));
router.use('/login', checkUser, loginController);
router.use('/signup', signupController);

module.exports = router;
