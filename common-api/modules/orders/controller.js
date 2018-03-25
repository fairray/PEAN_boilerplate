const BaseController = require('../base/controller');
const service = require('./service');

class OrderController extends BaseController {
  constructor(service) {
    super(service);
    this.findById = this.findById.bind(this);
  }
  async findById(req, res, next) {
    const { id } = req.params;
    const opt = {
      withRelated: 'user',
    };
    return this.service.findById({ id }, opt)
      .then(data => BaseController.createResponse(data, res))
      .catch(err => BaseController.catchError(err, next));
  }
}

module.exports = new OrderController(service);
