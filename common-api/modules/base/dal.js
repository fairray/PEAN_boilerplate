class Dal {
    constructor(db, table){
        this.table = table;
        this.db = db;
        this.read = this.read.bind(this);
    }
    findOne(search){
        return read(search).first();
    }
    read(data = {}, opt = {}){
        const db =  opt.db || this.db;
        return db(this.table).where(data);
    }
    findById(id){
        return this.read({id});
    }
}
module.exports = Dal;