const orders = [
  {
    id: 1, title: 'test1_orders', author_id: 2, executor_id: 2, site_id: 1,
  },
  {
    id: 2, title: 'test2_orders', author_id: 1, executor_id: 1, site_id: 2,
  },
  {
    id: 3, title: 'test3_orders', author_id: 3, executor_id: 3, site_id: 3,
  },
];

exports.seed = (knex, Promise) =>
// Deletes ALL existing entries
  Promise.resolve(knex('orders')
    .del()
    .then(() => knex('orders').insert(orders)));
