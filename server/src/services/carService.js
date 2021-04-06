const { ObjectID } = require('../data/db');
const carsData = require('../data/carsData');

const addCar = carInfo => carsData.create(carInfo);
const deleteCar = carId => carsData.delete(carId);

const addCarBuyOffer = (carId, offerData) => carsData.addCarBuyOffer(carId, offerData);

const updateCar = (carId, updateData) => {
    const matchCriteria = { _id: ObjectID(carId) };
    const updateOperation = { $set: updateData };

    carsData.updateCar(matchCriteria, updateOperation);
};

const searchCars = filters => {
    //add BE validation
    const matchQuery = {
        userId: { $ne: filters.userId },
        make: filters.make,
        model: filters.model,
        year: { $gte: filters.yearFrom, $lte: filters.yearTo },
        price: { $gte: filters.minPrice, $lte: filters.maxPrice },
    };

    return carsData.getCars(matchQuery);
};

const getUserCars = userId => {
    //add BE validation
    const matchQuery = { userId };

    return carsData.getCars(matchQuery);
};

module.exports = {
    addCar,
    searchCars,
    addCarBuyOffer,
    getUserCars,
    updateCar,
    deleteCar,
};
