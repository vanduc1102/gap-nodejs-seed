const express = require('express');
const router = express.Router();


router.get('/list', (req, res) => {
  if (Date.now() % 2 === 0) {
    throw new Error('Bad luck');
  }
  res.send({ msg: `Project Path:${req.originalUrl}` });
});

router.post('/create', (req, res) => {
  res.send({ msg: `Project Path:${req.originalUrl}` });
});

router.put('/:projectId/update', (req, res) => {
  res.send({ msg: `Project Path:${req.originalUrl}` });
});

router.delete('/:projectId/delete', (req, res) => {
  res.send({ msg: `Project Path:${req.originalUrl}` });
});

router.post('/:projectId/add-members', (req, res) => {
  res.send({ msg: `Project Path:${req.originalUrl}` });
});

module.exports = router;
