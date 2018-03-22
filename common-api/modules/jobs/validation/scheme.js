const Joi = require('joi');

const read = {
  title: Joi.string(),
};

const readOne = {
  id: Joi.number().required(),
};

module.exports = {
  read,
  readOne,
};
