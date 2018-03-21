
exports.up = (knex, Promise) => Promise.all([
  knex.schema.createTable('users', (table) => {
    table.increments('id').primary();
    table.string('name');
  }),
  knex.schema.createTable('entities', (table) => {
    table.increments('id').primary();
    table.string('name');
    table.integer('user_id').references('id').inTable('users');
  }),
]);

exports.down = (knex, Promise) => Promise.all([
  knex.schema.dropTable('users'),
  knex.schema.dropTable('entities'),
]);
