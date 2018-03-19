require('dotenv').config();

module.exports = {

  development: {
    client: 'pg',
    connection: {
      host: process.env.DB_HOST,
      database: process.env.DB_NAME,
      user: process.env.DB_USER,
      password: process.env.DB_PASS
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: `${ __dirname }/db/migrations`
    },
    seeds: {
      directory: `${__dirname}/db/seeds`
    },
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
      directory: `${__dirname}/db/migrations`
    },
    seeds: {
      directory: `${__dirname}/db/seeds`
    },
  }

};
