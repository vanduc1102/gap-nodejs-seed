const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send({
    msg: 'Hello! Server is up and running'
  });
});

router.use('/v1/projects', require('./project'));

router.all('*', (req, res) => {
  res.status(404).send({
    msg: 'not found'
  });
});

module.exports = router;
