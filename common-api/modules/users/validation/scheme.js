const Joi = require('joi');

const fetch = {
  name: Joi.string(),
};

const readOne = {
  id: Joi.number().required(),
};

module.exports = {
  fetch,
  readOne,
};
