const { TABLES } = require('../../db');

const BaseDal = require('../base/dal');

module.exports = new BaseDal(TABLES.USERS);
