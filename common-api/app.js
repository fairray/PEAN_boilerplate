const express = require('express');
const bodyParser = require('body-parser');
const logger = require('./core/logger');
const { NotFoundError } = require('./core/errors');

const routes = require('./routes');

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

routes.init(app);

function NotFoundHandler(req, res, next) {
  return next(new NotFoundError());
}

function logErrors(err, req, res, next) {
  logger.error(err.stack);
  next(err);
}

function clientErrorHandler(err, req, res, next) {
  const status = err.status || 500;
  const {
      message ='Something failed!',
      details = []
  } = err
  res.status(status);
  res.send({ message, details });
}


app.use(NotFoundHandler);
app.use(logErrors);
app.use(clientErrorHandler);


module.exports = app;
