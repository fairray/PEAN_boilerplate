class BaseService {
<<<<<<< HEAD
  constructor(dal, validation){
=======
  constructor(dal, validation) {
>>>>>>> feature/base_
    this.dal = dal;
    this.validation = validation;
    this.read = this.read.bind(this);
    this.readOne = this.readOne.bind(this);
  }
  async read(data) {
    return this.validation.read(data)
<<<<<<< HEAD
      .then(this.dal.read)
=======
      .then(this.dal.read);
>>>>>>> feature/base_
  }

  async readOne(data) {
    return this.validation.readOne(data)
<<<<<<< HEAD
      .then(this.dal.readOne)
  }
}

module.exports = BaseService;
=======
      .then(this.dal.readOne);
  }
}

module.exports = BaseService;
>>>>>>> feature/base_
