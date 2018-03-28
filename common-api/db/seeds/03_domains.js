const domains = [
  { id: 1, site_id: 2, domain: 'test1_domain.com' },
  { id: 2, site_id: 1, domain: 'test2_domain.com' },
  { id: 3, site_id: 3, domain: 'test3_domain.com' },
];

exports.seed = (knex, Promise) =>
// Deletes ALL existing entries
  Promise.resolve(knex('domains')
    .del()
    .then(() => knex('domains').insert(domains)));
