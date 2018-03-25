const { Db, TABLES } = require('../../db');

require('../users/model');

const Job = Db.Model.extend({
  tableName: TABLES.JOBS,
  user() {
    return this.belongsTo('User');
  },
});

module.exports = Db.model('Job', Job);
