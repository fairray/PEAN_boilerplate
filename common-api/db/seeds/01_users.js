
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, name: 'test1'},
        {id: 2, name: 'test2'},
        {id: 3, name: 'test3'}
      ]);
    });
};
