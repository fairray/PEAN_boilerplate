const BaseService = require('../base/service');
const validation = require('./validation');
const model = require('./model');

class UserService extends BaseService {
  constructor(model, validation) {
    super(model, validation);
    this.withRelated = ['ordersByAuthor', 'jobs']
  }
}

module.exports = new UserService(model, validation);
