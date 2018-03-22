const Joi = require('joi');
const scheme = require('./scheme');
const { ValidationError } = require('../../../core/errors');


module.exports = {
  fetch(data) {
    return new Promise((resolve, reject) => {
      const { error, value } = Joi.validate(data, scheme.fetch);
      if (error) {
        return reject(new ValidationError(error.message));
      }
      return resolve(value);
    });
  },
  readOne(data) {
    return new Promise((resolve, reject) => {
      const { error, value } = Joi.validate(data, scheme.readOne);
      if (error) {
        return reject(new ValidationError(error.message));
      }
      return resolve(value);
    });
  },
};
