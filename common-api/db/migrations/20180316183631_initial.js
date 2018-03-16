
exports.up = function(knex, Promise) {
    return Promise.all([
        knex.schema.crateTable('users', (table) => {
            table.increments('id').primary();
            table.string('name');
            table.timestamps(true, true);
        }),
        knex.schema.createTable('entities', function(table) {
            table.increments('id').primary();
            table.string('name');
            table.integer('user_id').unsigned()
            table.foreign('user_id')
              .references('user.id');
      
            table.timestamps(true, true);
          })
    ])
};

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.dropTable('users'),
        knex.schema.dropTable('entities')
      ]);  
};
