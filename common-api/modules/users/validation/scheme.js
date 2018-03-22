const Joi = require('joi');

const find = {
  name: Joi.string(),
};

const readOne = {
  id: Joi.number().required(),
};

module.exports = {
  find,
  readOne,
};
