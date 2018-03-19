require('dotenv').config();

const knex = require('knex');
const env = process.env.NODE_ENV || 'development';
const config = require('../knexfile')[env];
module.exports = knex(config);