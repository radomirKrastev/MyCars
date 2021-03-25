const { getDb } = require('./db');

module.exports = {
    create: async adInfo => getDb().collection('ads').insertOne(adInfo),
};
