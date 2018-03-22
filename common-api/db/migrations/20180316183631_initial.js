
exports.up = (knex, Promise) => Promise.all([
  knex.schema.createTable('users', (table) => {
    table.increments('id').primary();
    table.string('name');
  }),
  knex.schema.createTable('orders', (table) => {
    table.increments('id').primary();
    table.string('title');
    table.text('description');
    table.json('jobs_for_order');
    table.integer('user_id').notNullable().references('id').inTable('users').onDelete('cascade');;
  }),
  knex.schema.createTable('jobs', (table) => {
    table.increments('id').primary();
    table.string('title');
    table.text('text');
    table.integer('user_id').notNullable().references('id').inTable('users').onDelete('cascade');;
    table.integer('order_id').notNullable().references('id').inTable('orders').onDelete('cascade');;
  }),
]);

exports.down = (knex, Promise) => Promise.all([
  knex.schema.dropTable('users'),
  knex.schema.dropTable('orders'),
  knex.schema.dropTable('jobs'),
]);
