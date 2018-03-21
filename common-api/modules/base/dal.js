const { connection } = require('../../db');

class Dal {
  constructor(table) {
    this.table = table;
    this.db = connection;
    this.read = this.read.bind(this);
    this.readOne = this.readOne.bind(this);
  }

  read(data = {}, opt = {}) {
    const db = opt.db || this.db;
    return db(this.table).where(data);
  }

  readOne(data = {}, opt = {}) {
    const db = opt.db || this.db;
    return db(this.table).where(data).first();
  }
}
module.exports = Dal;
