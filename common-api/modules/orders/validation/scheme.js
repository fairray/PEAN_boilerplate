const Joi = require('joi');

const find = {
  title: Joi.string(),
};

const readOne = {
  id: Joi.number().required(),
};

module.exports = {
  find,
  readOne,
};
