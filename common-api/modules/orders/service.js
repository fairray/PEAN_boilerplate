const BaseService = require('../base/service');
const validation = require('./validation');
const model = require('./model');

module.exports = new BaseService(model, validation);
