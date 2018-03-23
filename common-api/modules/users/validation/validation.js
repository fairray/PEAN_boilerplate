const Joi = require('joi');
const scheme = require('./scheme');
const { ValidationError } = require('../../../core/errors');


module.exports = {
  find(data) {
    return new Promise((resolve, reject) => {
      const { error, value } = Joi.validate(data, scheme.find);
      if (error) {
        return reject(new ValidationError(error.message));
      }
      return resolve(value);
    });
  },
  findById(data) {
    return new Promise((resolve, reject) => {
      const { error, value } = Joi.validate(data, scheme.findById);
      if (error) {
        return reject(new ValidationError(error.message));
      }
      return resolve(value);
    });
  },
};
