const app = require('express')();

app.get('/list', (req, res) => {
  res.send({ msg: `Project Path:${req.originalUrl}` });
});

app.post('/create', (req, res) => {
  res.send({ msg: `Project Path:${req.originalUrl}` });
});

app.put('/:projectId/update', (req, res) => {
  res.send({ msg: `Project Path:${req.originalUrl}` });
});

app.delete('/:projectId/delete', (req, res) => {
  res.send({ msg: `Project Path:${req.originalUrl}` });
});

app.post('/:projectId/add-members', (req, res) => {
  res.send({ msg: `Project Path:${req.originalUrl}` });
});

module.exports = app;
