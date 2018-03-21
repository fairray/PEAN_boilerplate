const Joi = require('joi');

const read = {
  name: Joi.string(),
};

const readOne = {
  id: Joi.number().required(),
};

module.exports = {
  read,
  readOne,
};
