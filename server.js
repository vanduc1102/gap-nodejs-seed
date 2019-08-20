const logger = require('./src/helpers/logger');
const app = require('./src/app');

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  logger.info(`App listening on port ${PORT}`);
});
