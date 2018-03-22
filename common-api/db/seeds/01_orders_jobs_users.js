const jobs = [
  {
    id: 1, title: 'title 1', order_id: 1, user_id: 2,
  },
  {
    id: 2, title: 'title 2', order_id: 2, user_id: 3,
  },
  {
    id: 3, title: 'title 3', order_id: 3, user_id: 1,
  },
];
const orders = [
  { id: 1, title: 'test 1', user_id: 1 },
  { id: 2, title: 'test 2', user_id: 2 },
  { id: 3, title: 'test 3', user_id: 1 },
];
const users = [
  { id: 1, name: 'test1' },
  { id: 2, name: 'test2' },
  { id: 3, name: 'test3' },
];
exports.seed = (knex, Promise) =>
// Deletes ALL existing entries
  Promise.resolve(knex('users')
    .del()
    .then(() => knex('jobs').del())
    .then(() => knex('orders').del())
    .then(() => knex('users').insert(users))
    .then(() => knex('orders').insert(orders))
    .then(() => knex('jobs').insert(jobs)));

