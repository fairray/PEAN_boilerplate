const Joi = require('joi');

const find = {
  title: Joi.string(),
};

const findById = {
  id: Joi.number().required(),
};

module.exports = {
  find,
  findById,
};
