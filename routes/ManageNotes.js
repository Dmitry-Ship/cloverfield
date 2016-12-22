const express = require('express');

const router = express.Router();
const Note = require('../models/Note');

router.get('/', (req, res) => {
  Note.find({})
    .exec((err, notes) => {
      if (err) {
        res.send('error occured');
      } else {
        res.send(notes);
      }
    });
});

router.post('/', (req, res) => {
  Note.create(req.body, (err, note) => {
    if (err) {
      res.send('error adding a user');
    } else {
      res.send(note);
    }
  });
});

router.delete('/:id', (req, res) => {
  Note.remove({ _id: req.params.id },
    (err, note) => {
      if (err) {
        res.send('error deleting');
      } else {
        res.send(req.params.id);
      }
    });
});


router.put('/:id', (req, res) => {
  const type = Object.keys(req.body);

  const option = { [type]: req.body[type] };
  Note.findOneAndUpdate({
    _id: req.params.id,
  },
    option,
    { new: true, upsert: true }, //OMG!!!
    (err, note) => {
      if (err) {
        res.send('error updating');
      } else {
        res.send(note);
      }
    });
});

module.exports = router;
