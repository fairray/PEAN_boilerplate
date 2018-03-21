const BaseController = require('../base/controller');
const service = require('./service');

module.exports = new BaseController(service);