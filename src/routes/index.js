const app = require('express')();

app.get('/', (req, res) => {
  res.send({
    msg: 'Hello! Server is up and running'
  });
});

app.use('/v1/projects', require('./project'));

app.all('*', (req, res) => {
  res.status(404).send({
    msg: 'not found'
  });
});

module.exports = app;
