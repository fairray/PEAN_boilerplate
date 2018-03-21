
exports.seed = (knex, Promise) =>
  // Deletes ALL existing entries
  Promise.resolve(knex('users')
    .del()
    .then(() =>
      // Inserts seed entries
      knex('users').insert([
        { id: 1, name: 'test1' },
        { id: 2, name: 'test2' },
        { id: 3, name: 'test3' },
      ])));

