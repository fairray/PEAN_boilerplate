const db = require('./knex');
const TABLES = require('./tables');
const Model = require('./model'); 
module.exports = {
    db,
    TABLES,
    Model
}