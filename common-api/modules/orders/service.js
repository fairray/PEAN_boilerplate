const BaseService = require('../base/service');
const validation = require('./validation');
const model = './model';

module.exports = new BaseService(model, validation);
