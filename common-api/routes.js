const user = require('./modules/users');

const init = (app) => {
    user(app);
}
module.exports = {
  init,
};
