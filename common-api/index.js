const express = require('express');
const winston = require('winston');
const app = express();

winston.level = 'debug';

app.get('/', (req, res) => {
    winston.log('debug', 'Now my debug messages are written to console!');
    res.end('responce');
})


app.listen(3000, () => {
    winston.info('server run');
})