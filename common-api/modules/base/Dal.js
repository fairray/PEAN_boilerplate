const db = require('./knex');

class Dal {
  constructor(db, table){
    this.table = table;
    this.db = db;
    this.read = this.read.bind(this);
  }
  read(data, opts = {}) {
    const db = opts.db || this.db;
    return db(this.table).where(data);
  }
}
module.exports = Model;