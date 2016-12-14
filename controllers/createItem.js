const express = require('express'),
      router = express.Router();

router.post('/', (req, res) => {
  res.send({
    _id: '456',
    title: req.body.title,
    content: req.body.content,
    tags: [],
    color: req.body.color
  });
});

module.exports = router;
