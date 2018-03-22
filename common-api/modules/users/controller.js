const BaseController = require('../base/controller');
const service = require('./service');

class UserController extends BaseController{
    constructor(service){
        super(service);
        this.fetch.bind(this);
    }
    async fetch(req, res, next){
        const opt = {
            withRelated: 'Orders'
        }
        return this.service.model.fetch({},opt)
            .then((data) => BaseController.createResponse(data, res))
            .catch(err => BaseController.catchError(err, next))
    }
}
module.exports = new UserController(service);
