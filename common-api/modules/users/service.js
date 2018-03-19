const Users = require('./dal');

const getUsersWithEntities = () => {
    // make join with entities
    return Users.getAll(); //example without join
}


module.exports = {
    getUsersWithEntities
}