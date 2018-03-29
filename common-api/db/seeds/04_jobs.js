const jobs = [
  {
    id: 1, title: 'test1_jobs', text: 'test1_description', user_last_modify: 2, demo_id: 2, order_id: 1,
  },
  {
    id: 2, title: 'test2_jobs', text: 'test2_description', user_last_modify: 1, demo_id: 1, order_id: 2,
  },
  {
    id: 3, title: 'test3_jobs', text: 'test3_description', user_last_modify: 3, demo_id: 3, order_id: 3,
  },
];

exports.seed = (knex, Promise) =>
// Deletes ALL existing entries
  Promise.resolve(knex('jobs')
    .del()
    .then(() => knex('jobs').insert(jobs)));
