class BaseController {
  constructor(service) {
    this.service = service;
    this.find = this.find.bind(this);
    this.findById = this.findById.bind(this);
  }
  async find(req, res, next) {
    const { body } = req;
    return this.service.find(body)
      .then(data => BaseController.createResponse(data, res))
      .catch(err => BaseController.catchError(err, next));
  }

  async findById(req, res, next) {
    const { id } = req.params;
    return this.service.findById({ id })
      .then(data => BaseController.createResponse(data, res))
      .catch(err => BaseController.catchError(err, next));
  }
  static catchError(error, next) {
    next(error);
  }
  static createResponse(data, res) {
    res.json(data);
  }
}

module.exports = BaseController;
