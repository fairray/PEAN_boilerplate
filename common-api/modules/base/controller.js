class BaseController {
  constructor(service) {
    this.service = service;
  }

  static catchError(error, next) {
    next(error);
  }
  static createResponse(data, res) {
    res.json(data);
  }
}

module.exports = BaseController;
