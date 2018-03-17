const db = require('./knex');
const TABLES = require('./tables');
const queries = require('./queries'); 
module.exports = {
    db,
    TABLES,
    queries
}