const { db, TABLES, Model } = require('../db');

// const getUser = queries.findOne(TABLES.USERS);

class Users extends Model{
    constructor(db, tableName) {
        super(db, tableName);
    }
}

module.exports = new Users(db, TABLES.USERS);