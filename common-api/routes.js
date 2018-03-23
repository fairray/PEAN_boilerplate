const users = require('./modules/users');
const orders = require('./modules/orders');
const jobs = require('./modules/jobs');

const init = (app) => {
  users(app);
  orders(app);
  //jobs(app);
};
module.exports = {
  init,
};
