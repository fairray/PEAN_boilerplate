const BaseDal = require('../base/Dal');

// use if u need rewrite
// module.exports = class Dal extends BaseDal {
//   readOne() {
//
//   }
// };

module.exports = new BaseDal('users'); // must be in config