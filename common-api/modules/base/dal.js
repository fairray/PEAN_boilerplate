const db = require('../../db');

class Model {
    constructor(db, table){
        this.table = table;
        this.db = db;
    }
    get dbTable(){
        return this.db(this.table);
    }
    findOne(search){
        return this.dbTable.where(search).first();
    }
    getAll(){
        return this.dbTable;
    }
    findById(id){
        return this.table.where('id', id)
    }
}
module.exports = Model;