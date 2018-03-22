const BaseController = require('../base/controller');
const service = require('./service');

class UserController extends BaseController{
    constructor(service){
        super(service);
    }
}
module.exports = new UserController(service);
