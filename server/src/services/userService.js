const userData = require('../data/userData');

const register = userDocument => userData.create(userDocument);

const checkIsUsernameOccupied = username => userData.checkIsUsernameOccupied(username); 

const getUserByUsername = username => userData.getUser({ username }); 

module.exports = {
    register,
    checkIsUsernameOccupied,
    getUserByUsername,
};
