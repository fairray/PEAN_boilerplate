const db = require('./knex');

const findOne = (table) => {
    return (search) => {
        return db.select('*').from(table).where(search).limit(1);
    }
}

module.exports = {
    findOne
}