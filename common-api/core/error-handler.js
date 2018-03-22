const logger = require('./logger');
const { NotFoundError } = require('./errors');

const NotFoundHandler = (req, res, next) => {
    return next(new NotFoundError());
  }
  
const logErrors = (err, req, res, next) => {
    logger.error(err.stack);
    next(err);
  }
  
const clientErrorHandler = (err, req, res, next) => {
    const status = err.status || 500;
    const {
        message ='Something failed!',
        details = []
    } = err
    res.status(status);
    res.send({ message, details });
  }

module.exports = {
    NotFoundHandler,
    clientErrorHandler,
    logErrors
}