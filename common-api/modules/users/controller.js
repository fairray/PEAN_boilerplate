const BaseController = require('../base/controller');
const service = require('./service');

class UserController extends BaseController {
  constructor(service) {
    super(service);
    this.findById = this.findById.bind(this);
  }
  async findById(req, res, next) {
    const { id } = req.params;
    const opt = {
      withRelated: 'orders',
    };
    return this.service.findById({ id }, opt)
      .then(data => BaseController.createResponse(data, res))
      .catch(err => BaseController.catchError(err, next));
  }
}
module.exports = new UserController(service);
