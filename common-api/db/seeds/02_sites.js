const sites = [
  { id: 1, server_id: 2 },
  { id: 2, server_id: 1 },
  { id: 3, server_id: 3 },
];

exports.seed = (knex, Promise) =>
// Deletes ALL existing entries
  Promise.resolve(knex('sites')
    .del()
    .then(() => knex('sites').insert(sites)));
