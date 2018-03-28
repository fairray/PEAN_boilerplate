const servers = [
  { id: 1, name: 'test1_server' },
  { id: 2, name: 'test2_server' },
  { id: 3, name: 'test3_server' },
];

exports.seed = (knex, Promise) =>
// Deletes ALL existing entries
  Promise.resolve(knex('servers')
    .del()
    .then(() => knex('servers').insert(servers)));
