const tagsDemos = [
  { id: 1, tag_id: 2, demo_id: 1 },
  { id: 2, tag_id: 1, demo_id: 1 },
  { id: 3, tag_id: 3, demo_id: 3 },
  { id: 4, tag_id: 3, demo_id: 2 },
];

exports.seed = (knex, Promise) =>
// Deletes ALL existing entries
  Promise.resolve(knex('tags_demos')
    .del()
    .then(() => knex('tags_demos').insert(tagsDemos)));
