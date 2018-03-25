const config = require('../knexfile');

const knex = require('knex')(config);

const bookshelf = require('bookshelf')(knex);

bookshelf.plugin('registry');


module.exports = bookshelf;
