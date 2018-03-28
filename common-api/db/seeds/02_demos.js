const demos = [
  { id: 1, provider_id: 2, name: 'test1_demo' },
  { id: 2, provider_id: 1, name: 'test2_demo' },
  { id: 3, provider_id: 3, name: 'test3_demo' },
];

exports.seed = (knex, Promise) =>
// Deletes ALL existing entries
  Promise.resolve(knex('demos')
    .del()
    .then(() => knex('demos').insert(demos)));
