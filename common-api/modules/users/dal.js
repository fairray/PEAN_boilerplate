const { TABLES } = require('../../db');

const BaseDal = require('../base/Dal');

module.exports = new BaseDal(TABLES.USERS);