const { Db, TABLES } = require('../../db');

require('../users/model');

const Order = Db.Model.extend({
  tableName: TABLES.ORDERS,
  author() {
    return this.belongsTo('User', 'id');
  },
  executor() {
    return this.belongsTo('User', 'id');
  },
});
module.exports = Db.model('Order', Order);
