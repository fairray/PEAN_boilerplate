// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: 'pean',
      user:     'fairray',
      password: '123456789'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './db/migrations'
    }
  },

  production: {
    client: 'pg',
    connection: {
      database: 'my_db',
      user:     'username',
      password: '123456789'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './db/migrations'
    }
  }

};
