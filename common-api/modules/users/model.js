const { Db, TABLES } = require('../../db');

require('../orders/model');
require('../jobs/model');

const User = Db.Model.extend({
  tableName: TABLES.USERS,
  orders() {
    return this.hasMany('Order');
  },
  jobs() {
    return this.hasMany('Job');
  },
});
module.exports = Db.model('User', User);
