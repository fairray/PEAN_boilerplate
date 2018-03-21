const AppError = require('./base');

class NotFoundError extends AppError {
  constructor() {
    super('Not found', 404);
  }
}

module.exports = NotFoundError;
