const { Db, TABLES } = require('../../db');

require('../users/model');

const Order = Db.Model.extend({
  tableName: TABLES.ORDERS,
  user: function() {
    return this.hasOne('User');
  },
});
module.exports = Db.model('Order', Order);