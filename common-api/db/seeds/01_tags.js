const tags = [
  { id: 1, name: 'test1_tags' },
  { id: 2, name: 'test2_tags' },
  { id: 3, name: 'test3_tags' },
];

exports.seed = (knex, Promise) =>
// Deletes ALL existing entries
  Promise.resolve(knex('tags')
    .del()
    .then(() => knex('tags').insert(tags)));
