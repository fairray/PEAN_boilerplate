const Joi = require('joi');

const validateReq = (value) => {
    const schema = {
        name: Joi.string().required()
    };

    return Joi.validate(value, schema);
}


module.exports = {
    validateReq
}