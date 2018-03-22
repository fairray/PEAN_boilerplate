const jobs = [
    {id: 1, title: 'title 1', order_id: 1, user_id: 2},
    {id: 2, title: 'title 2', order_id: 2, user_id: 3},
    {id: 3, title: 'title 3', order_id: 3, user_id: 1}
  ];
const orders = [
    {id: 1, title: 'test 1', user_id: 1},
    {id: 2, title: 'test 2', user_id: 2},
    {id: 3, title: 'test 3', user_id: 1}
  ];
const users = [
    { id: 1, name: 'test1' },
    { id: 2, name: 'test2' },
    { id: 3, name: 'test3' },
  ];
  exports.seed = (knex, Promise) => {
    // Deletes ALL existing entries
    return Promise.resolve(
        knex('users')
            .del()
            .then( () => {
                return knex('jobs').del();
            })
            .then( () => {
                return knex('orders').del();
            })
            .then(() => {
                return knex('users').insert(users);
            })
            .then(() => {
                return knex('orders').insert(orders);
            })
            .then(() => {
                return  knex('jobs').insert(jobs);
            })
    )
  };
  