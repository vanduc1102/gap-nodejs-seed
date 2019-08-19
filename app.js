const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const logger = require('./src/helpers/logger');
const app = express();

const routes = require('./src/routes');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ limit: '50mb' }));

if (process.env.NODE_ENV === 'production') {
  app.set('trust proxy', 'loopback');
} else {
  app.use(cors());
}

app.use(routes);

function errorHandler(err, req, res, next) {
  if (res.headersSent) {
    return next(err);
  }
  res.status(500);
  return res.render('error', { error: err });
}

function logErrors(err, req, res, next) {
  logger.error(err.stack);
  next(err);
}

app.use(logErrors);
app.use(errorHandler);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  logger.info(`App listening on port ${PORT}`);
});

module.exports = app;
