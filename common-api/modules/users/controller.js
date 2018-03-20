const BaseController = require('../base/Controller');
const service = require('./service');

module.exports = new BaseController(service);