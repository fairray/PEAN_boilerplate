const path = require('path');
const rootPath = path.join(__dirname, '../');
const dbPath = path.normalize(`${rootPath}/db`);

module.exports = {
    client: 'pg',
    connection: {
        host: 'db',
        database: 'db',
        user: 'db',
        password: 'db',
    },
    pool: {
        min: 2,
        max: 10,
    },
    migrations: {
        directory: `${dbPath}/migrations`,
    },
    seeds: {
        directory: `${dbPath}/seeds`,
    }
}