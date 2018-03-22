const BaseController = require('../base/controller');
const service = require('./service');

class UserController extends BaseController{
    constructor(service){
        super(service);
        this.fetch = this.fetch.bind(this);
    }
    async fetch(req, res, next) {
        const opt = {
            withRelated: ['orders', 'jobs']
        }
        return this.service.fetch({},opt)
            .then((data) => BaseController.createResponse(data, res))
            .catch(err => BaseController.catchError(err, next))
    }
}
module.exports = new UserController(service);
