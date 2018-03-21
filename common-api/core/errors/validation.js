const AppError = require('./base');

class ValidationError extends AppError {
  constructor(details = []) {
    super('Request validation failed', 400);
    this.details = details;
  }
}

module.exports = ValidationError;
