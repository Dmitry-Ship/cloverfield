const express = require('express');
const multer = require('multer');
const path = require('path');
const generateToken = require('../helpers/generateToken');
const handleError = require('../helpers/handleError');
const User = require('../models/User');
const Note = require('../models/Note');

const validateInput = require('../helpers/validations/signup');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/');
  },
  filename: (req, file, cb) => {
    cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`);
  },
});



const upload = multer({ storage });
const router = express.Router();

router.post('/', upload.single('avatar'), (req, res) => {
  const { isValid, errors } = validateInput(req.body);

  if (!isValid) { return res.status(400).send(errors); }

  const { email, password, username, fullName } = req.body;
  const { file } = req;

  User.findOne({ email })
    .then((user) => {
      if (user) {
        return handleError(res, { email: 'That email address is already in use.' }, 422);
      }
      const newUser = new User({
        email,
        password,
        username,
        fullName,
        userpic: file ? file.filename : undefined,
      });

      return newUser.save();
    })
    .then((result) => {
      const token = generateToken(result);

      const firstNote = new Note({
        title: 'Hey, we are your first notes!',
        body: 'You can edit us, change color, add tags, etc. Remove us when there is no need for us. Or don`t. You be you. Sassy.',
        color: 'blue',
        tags: 'todo',
        _user: result._id,
      });


      const secondNote = new Note({
        title: 'Play around with this app',
        body: 'If you need to create a new note, just open the form right adove us. You can also attach an image to a note!',
        color: 'green',
        tags: 'todo',
        _user: result._id,
      });

      const thirdNote = new Note({
        title: 'It`s ok if you have nothing smart to wright down yet',
        body: `“If you can't be a good example, then you'll just have to be a horrible warning.”
                ― Catherine Aird`,
        color: 'red',
        tags: 'quotes',
        _user: result._id,
      });
      // the order is reversed because notes are desplay in descending order 
      thirdNote.save()
        .then(secondNote.save().then(firstNote.save()))
        .catch(err => handleError(res, err, 422));

      return res.json({ token: `Bearer ${token}` });
    })
    .catch(err => handleError(res, err));
});

module.exports = router;
