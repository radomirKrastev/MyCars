const { getDb, ObjectID } = require('./db');

module.exports = {
    create: carInfo => getDb().collection('cars').insertOne(carInfo),
    searchCars: matchQuery => getDb().collection('cars').find(matchQuery).toArray(),
    addCarBuyOffer: (carId, offerData) => getDb().collection('cars')
        .updateOne(
            { _id: ObjectID(carId) },
            { $push: { 'offers': offerData } }
        ),
};
