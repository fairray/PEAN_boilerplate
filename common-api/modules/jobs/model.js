const { Db, TABLES } = require('../../db');

require('../users/model');

const Job = Db.Model.extend({
  tableName: TABLES.JOBS,
  user: function() {
    return this.hasOne('User');
  },
});

module.exports = Db.model('Job', Job);