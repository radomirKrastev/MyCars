const { getDb } = require('./db');

module.exports = {
    create: async userDocument => {
        await getDb().collection('users').insertOne(userDocument);

        return userDocument;
    },

    checkIsUsernameOccupied: async username => {
        return await getDb().collection('users').countDocuments({ username }, { limit: 1 });
    }
};
