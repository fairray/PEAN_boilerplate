const { Db, TABLES } = require('../../db');

require('../users/model');

const Order = Db.Model.extend({
  tableName: TABLES.ORDERS,
  user() {
    return this.belongsTo('User');
  },
});
module.exports = Db.model('Order', Order);
