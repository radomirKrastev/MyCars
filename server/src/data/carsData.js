const { getDb } = require('./db');

module.exports = {
    create: carInfo => getDb().collection('cars').insertOne(carInfo),
    searchCars: matchQuery => getDb().collection('cars').find(matchQuery).toArray(),
};
