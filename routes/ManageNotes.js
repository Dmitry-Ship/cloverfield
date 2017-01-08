const express = require('express');

const router = express.Router();
const Note = require('../models/Note');

router.get('/', (req, res) => {
  Note.find({})
    .exec((err, notes) => {
      if (err) {
        res.send('error occured');
      }
      res.send(notes);
    });
});

router.post('/', (req, res) => {
  Note.create(req.body, (err, note) => {
    if (err) {
      res.send('error adding note');
    }
    res.send(note);
  });
});

router.delete('/:id', (req, res) => {
  Note.remove({ _id: req.params.id },
    (err) => {
      if (err) {
        res.send('error deleting');
      }
      res.send(req.params.id);
    });
});

router.put('/:id/tags', (req, res) => {
  const type = Object.keys(req.body);

  let option;
  if (`${type}` === 'tags') {
    option = { $push: { tags: req.body[type] } };
  } else if (`${type}` === 'tagsDel') {
    option = { $pull: { tags: req.body[type] } };
  }

  Note.findOneAndUpdate({
    _id: req.params.id,
  },
    option,
    { new: true, upsert: true }, // OMG!!!
    (err, note) => {
      if (err) {
        res.send('error updating');
      }
      res.send(note);
    });
});

router.put('/:id', (req, res) => {
  const type = Object.keys(req.body);
  const option = { [type]: req.body[type] };
  Note.findOneAndUpdate({
    _id: req.params.id,
  },
    option,
    { new: true, upsert: true }, // OMG!!!
    (err, note) => {
      if (err) {
        res.send('error updating');
      }
      res.send(note);
    });
});

module.exports = router;
