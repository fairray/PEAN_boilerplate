const express = require('express');
const logger = require('./logger');

const app = express();

app.get('/', (req, res) => {
    logger.log('debug', 'Now my debug messages are written to console!');
    res.end('responce');
})


module.exports = app;