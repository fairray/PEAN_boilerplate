const BaseService = require('../base/service');
const validation = require('./validation');
const model = require('./model');

class OrderService extends BaseService {
  constructor(model, validation) {
    super(model, validation);
    this.withRelated = ['author', 'executor']
  }
}

module.exports = new OrderService(model, validation);
