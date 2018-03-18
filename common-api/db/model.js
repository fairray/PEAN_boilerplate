const db = require('./knex');

// const findOne = (table) => {
//     return (search) => {
//         return db.select('*').from(table).where(search).limit(1);
//     }
// }

// module.exports = {
//     findOne
// }

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