const { TABLES, queries } = require('../db');

const getUser = queries.findOne(TABLES.USERS); 

module.exports = {
    getUser
}