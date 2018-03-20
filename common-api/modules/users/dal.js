const { db, TABLES } = require('../../db');

const { Dal } = require('../base');

class Users extends Dal{
    getAllUsers(){
        return this.read();
    }
}

module.exports = new Users(db, TABLES.USERS);