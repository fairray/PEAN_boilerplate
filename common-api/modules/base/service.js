class BaseService {
  constructor(dal, validation){
    this.dal = dal;
    this.validation = validation;
    this.read = this.read.bind(this);
    this.readOne = this.readOne.bind(this);
  }
  async read(data) {
    return this.validation.read(data)
      .then(this.dal.read)
  }

  async readOne(data) {
    return this.validation.readOne(data)
      .then(this.dal.readOne)
  }
}

module.exports = BaseService;