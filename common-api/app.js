const express = require('express');
const bodyParser = require('body-parser')
const logger = require('./core/logger');

const routes =  require('./routes');
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

routes.init(app);
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