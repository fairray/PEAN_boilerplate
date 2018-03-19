const userService = require('./service');

const getUsers = (req, res, next) => {
    
    userService.getUsersWithEntities()
    .then((users)=>{
        return res.json(users);
    })
    .catch(err=> next(err))
// logger.info('Now my debug messages are written to console!');
}

module.exports = {
    getUsers
}