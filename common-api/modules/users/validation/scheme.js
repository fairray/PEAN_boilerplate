const Joi = require('joi');

const find = {
  name: Joi.string(),
};

const findById = {
  id: Joi.number().required(),
};

module.exports = {
  find,
  findById,
};
