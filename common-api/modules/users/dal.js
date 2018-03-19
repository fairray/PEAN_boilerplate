const { db, TABLES } = require('../../db');

const { Dal } = require('../base');

class Users extends Dal{
    constructor(db, tableName) {
        super(db, tableName);
    }
}

module.exports = new Users(db, TABLES.USERS);