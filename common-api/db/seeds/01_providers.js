const providers = [
  { id: 1, name: 'test1' },
  { id: 2, name: 'test2' },
  { id: 3, name: 'test3' },
];

exports.seed = (knex, Promise) =>
// Deletes ALL existing entries
  Promise.resolve(knex('providers')
    .del()
    .then(() => knex('providers').insert(providers)));
