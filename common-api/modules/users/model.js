const { Db, TABLES } = require('../../db');

require('../orders/model');
require('../jobs/model');

const User = Db.Model.extend({
  tableName: TABLES.USERS,
  orders: function() {
    return this.hasMany('Orders');
  },
  jobs: function() {
    return this.hasMany('Jobs');
  }
});
module.exports = Db.model('User', User);