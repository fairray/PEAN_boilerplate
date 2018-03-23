const { Db, TABLES } = require('../../db');

require('../users/model');

const Order = Db.Model.extend({
  tableName: TABLES.ORDERS,
  user: function() {
    return this.belongsTo('User');
  },
});
module.exports = Db.model('Order', Order);