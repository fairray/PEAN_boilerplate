const express = require('express');
const bodyParser = require('body-parser');
const { NotFoundHandler,clientErrorHandler, logErrors } = require('./core/error-handler');
const routes = require('./routes');

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
// routes initialization
routes.init(app);
// error handlers
app.use(NotFoundHandler);
app.use(logErrors);
app.use(clientErrorHandler);


module.exports = app;
