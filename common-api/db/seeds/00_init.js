exports.seed = (knex, Promise) =>
  // Deletes ALL existing entries
  Promise.resolve(
    knex('tags_demos').del()
      .then(() => knex('jobs').del())
      .then(() => knex('orders').del())
      .then(() => knex('domains').del())
      .then(() => knex('sites').del())
      .then(() => knex('demos').del())
      .then(() => knex('users').del())
      .then(() => knex('providers').del())
      .then(() => knex('tags').del())
      .then(() => knex('servers').del())

  );
