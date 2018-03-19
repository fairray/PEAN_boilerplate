const express = require('express');
const logger = require('./core/logger');

const app = express();

const { userRoutes } = require('./modules/users');


app.use('/users', userRoutes);

app.use(NotFoundHandler);
app.use(logErrors);
app.use(clientErrorHandler);

function NotFoundHandler(req, res, next){
    res.status(404);
    next(new Error('Not found'))
}

function logErrors(err, req, res, next) {
    logger.error(err.stack);
    next(err);
}

function clientErrorHandler(err, req, res, next) {
    res.status = res.statusCode || 500;
    res
        .send({ error: 'Something failed!' });
}
  


module.exports = app;