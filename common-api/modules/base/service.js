class BaseService {
  constructor(model, validation) {
    this.model = model;
    this.validation = validation;
    this.withRelated = [];
    this.find = this.find.bind(this);
    this.findById = this.findById.bind(this);
  }
  async find(data = {}, opt = { withRelated: this.withRelated }) {
    return this.validation.find(data)
      .then(data => this.model.where(data).fetchAll(opt));
  }

  async findById(data = {}, opt = { withRelated: this.withRelated }) {
    return this.validation.findById(data)
      .then(data => this.model.where(data).fetch(opt));
  }
}

module.exports = BaseService;
