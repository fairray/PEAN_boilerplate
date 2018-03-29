
exports.up = (knex, Promise) => Promise.all([
  knex.schema.createTable('users', (table) => {
    table.increments('id').primary();
    table.string('name');
  }),
  knex.schema.createTable('orders', (table) => {
    table.increments('id').primary();
    table.string('title');
    table.integer('author_id').notNullable().references('id').inTable('users');
    table.integer('executor_id').notNullable().references('id').inTable('users');
    table.integer('site_id').notNullable().references('id').inTable('sites');
  }),
  knex.schema.createTable('jobs', (table) => {
    table.increments('id').primary();
    table.string('title');
    table.text('text');
    table.integer('user_last_modify').unsigned().references('id').inTable('users');
    table.integer('demo_id').unsigned().references('id').inTable('demos');
    table.integer('order_id').notNullable().references('id').inTable('orders');
  }),
  knex.schema.createTable('demos', (table) => {
    table.increments('id').primary();
    table.string('name');
    table.integer('provider_id').notNullable().references('id').inTable('providers');
  }),
  knex.schema.createTable('providers', (table) => {
    table.increments('id').primary();
    table.string('name');
  }),
  knex.schema.createTable('tags_demos', (table) => {
    table.increments('id').primary();
    table.integer('tag_id').notNullable().references('id').inTable('tags');
    table.integer('demo_id').notNullable().references('id').inTable('demos');
  }),
  knex.schema.createTable('tags', (table) => {
    table.increments('id').primary();
    table.string('name');
  }),
  knex.schema.createTable('sites', (table) => {
    table.increments('id').primary();
    table.integer('server_id').notNullable().references('id').inTable('servers');
  }),
  knex.schema.createTable('servers', (table) => {
    table.increments('id').primary();
    table.string('name');
  }),
  knex.schema.createTable('domains', (table) => {
    table.increments('id').primary();
    table.string('domain');
    table.integer('site_id').notNullable().references('id').inTable('sites');
  }),
]);

exports.down = (knex, Promise) => Promise.all([
  knex.schema.dropTable('users'),
  knex.schema.dropTable('orders'),
  knex.schema.dropTable('jobs'),
  knex.schema.dropTable('demos'),
  knex.schema.dropTable('providers'),
  knex.schema.dropTable('tags_demos'),
  knex.schema.dropTable('tags'),
  knex.schema.dropTable('sites'),
  knex.schema.dropTable('servers'),
  knex.schema.dropTable('domains'),
]);
