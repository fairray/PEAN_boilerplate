
class BaseController {
<<<<<<< HEAD
  constructor(service){
=======
  constructor(service) {
>>>>>>> feature/base_
    this.service = service;
    this.read = this.read.bind(this);
    this.readOne = this.readOne.bind(this);
  }
  async read(req, res, next) {
    return this.service.read(req.body)
      .then(data => BaseController.createResponse(data, res))
<<<<<<< HEAD
      .catch(error => BaseController.catchError(error, next))
  }

  async readOne(req, res, next) {
    return this.service.readOne(req.body)
    .then(data => BaseController.createResponse(data, res))
    .catch(error => BaseController.catchError(error, next))
  }

  static catchError(error, next) {
    next()
=======
      .catch(error => BaseController.catchError(error, next));
  }

  async readOne(req, res, next) {
    return this.service.readOne(req.params)
      .then(data => BaseController.createResponse(data, res))
      .catch(error => BaseController.catchError(error, next));
  }

  static catchError(error, next) {
    next(error);
>>>>>>> feature/base_
  }
  static createResponse(data, res) {
    res.json(data);
  }
}

module.exports = BaseController;
