const { db } = require('../../db');

class Dal {
    constructor(table){
        this.table = table;
        this.db = db;
        this.read = this.read.bind(this);
    }

    read(data = {}, opt = {}){
        const db =  opt.db || this.db;
        return db(this.table).where(data);
    }
}
module.exports = Dal;