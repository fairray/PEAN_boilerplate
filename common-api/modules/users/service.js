const BaseService = require('../base/Service');
const dal = require('./dal');
const validation = require('./validation');

module.exports = new BaseService(dal, validation);