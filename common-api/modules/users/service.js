const BaseService = require('../base/service');
const validation = require('./validation');
const model = require('./model');

class UserService extends BaseService{
    constructor(model, validation){
        super(model, validation);
    }
}

module.exports = new UserService(model, validation);
