const BaseService = require('../base/service');
const dal = require('./dal');
const validation = require('./validation');

module.exports = new BaseService(dal, validation);