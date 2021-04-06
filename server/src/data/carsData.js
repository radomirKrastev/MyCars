const { getDb, ObjectID } = require('./db');

module.exports = {
    create: carInfo => getDb().collection('cars').insertOne(carInfo),
    delete: carId => getDb().collection('cars').remove({ _id: ObjectID(carId) }),
    getCars: matchQuery => getDb().collection('cars').find(matchQuery).toArray(),
    addCarBuyOffer: (carId, offerData) => getDb().collection('cars')
        .updateOne(
            { _id: ObjectID(carId) },
            { $push: { 'offers': offerData } }
        ),
    updateCar: (matchCriteria, updateOperation) =>
        getDb()
            .collection('cars')
            .updateOne(matchCriteria, updateOperation),
};
