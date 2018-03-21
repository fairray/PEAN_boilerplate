const Joi = require('joi');

// todo move to separate file
const schema = {
  name: Joi.string()
};


module.exports = {
  read(data) {
    return new Promise((resolve, reject) => {
      const { error, value } = Joi.validate(data, schema);
      if (error) {
        return reject({
          status: 401, // todo cretae class for this error
          error,
        })
      }
      resolve(value);
    })
  },
  readOne(data) {
    return new Promise((resolve, reject) => {
      const { error, value } = Joi.validate(data, schema);
      if (error) {
        return reject({
          status: 401, // todo cretae class for this error
          error,
        })
      }
      resolve(value);
    })
  }
};