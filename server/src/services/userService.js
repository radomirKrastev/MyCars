const userData = require('../data/userData');

const register = userDocument => userData.create(userDocument);

const checkIsUsernameOccupied = username => userData.checkIsUsernameOccupied(username);  

module.exports = {
    register,
    checkIsUsernameOccupied,
};
