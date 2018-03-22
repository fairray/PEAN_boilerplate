class BaseService {
  constructor(model, validation) {
    this.model = model;
    this.validation = validation;
    this.find = this.find.bind(this);
  }
  async find(data = {} , opt = {}){
    return this.validation.find(data)
      .then(data => this.model.where(data).fetch(opt))
  }
}

module.exports = BaseService;
