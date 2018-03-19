const { db, TABLES } = require('../db');

const { Dal } = require('../modules/base');

// const getUser = queries.findOne(TABLES.USERS);

class Users extends Dal{
    constructor(db, tableName) {
        super(db, tableName);
    }
}

module.exports = new Users(db, TABLES.USERS);