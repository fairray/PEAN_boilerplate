require('dotenv').config();

const knex = require('knex');

const env = process.env.NODE_ENV || 'development';
const config = require('../knexfile')[env];
const knexInit = knex(config);
const bookshelf = require('bookshelf')(knexInit);
bookshelf.plugin('registry');


module.exports = bookshelf;
