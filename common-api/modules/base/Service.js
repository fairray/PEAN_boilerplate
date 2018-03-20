class BaseService {
  constructor(dal, validation){
    this.dal = dal;
    this.validation = validation;
    this.read = this.read.bind(this);
  }
  async read(data) {
    return this.validation.read(data)
      .then(this.dal.read)
  }
}

module.exports = BaseService;