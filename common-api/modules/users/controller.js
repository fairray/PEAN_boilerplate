const userService = require('./service');
const Users = require('./dal');

const getUsers = (req, res, next) => {
    const { error , value } = userService.validateReq(req.body);
    if ( error ) {
        res.status(401);
        return next(new Error(error.message));
    }
    Users.getAllUsers()
    .then((users) => {
        return res.json(users);
    })
    .catch(err=> next(err))
// logger.info('Now my debug messages are written to console!');
}

module.exports = {
    getUsers
}