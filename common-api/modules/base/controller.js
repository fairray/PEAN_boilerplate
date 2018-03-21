
class BaseController {
  constructor(service){
    this.service = service;
    this.read = this.read.bind(this);
  }
  async read(req, res, next) {
    return this.service.read(req.body)
      .then(data => BaseController.createResponse(data, res))
      .catch(error => BaseController.catchError(error, next))
  }

  static catchError(error, next) {
    next()
  }
  static createResponse(data, res) {
    res.json(data);
  }
}

module.exports = BaseController;
