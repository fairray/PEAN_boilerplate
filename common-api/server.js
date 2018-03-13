require('dotenv').config();
const app = require('./app/app');
const logger = require('./app/logger');

app.listen(process.env.APP_PORT, process.env.APP_HOST, () => {
    logger.info('server run');
})