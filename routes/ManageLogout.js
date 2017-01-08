const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  req.logout();
  res.redirect('/');
  // res.send({ redirect: '/' });
});

module.exports = router;
