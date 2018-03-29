const { Db, TABLES } = require('../../db');

require('../orders/model');
require('../jobs/model');

const User = Db.Model.extend({
  tableName: TABLES.USERS,
  ordersByAuthor() {
    return this.hasMany('Order', 'author_id');
  },
  jobs() {
    return this.hasMany('Job');
  },
});
module.exports = Db.model('User', User);
