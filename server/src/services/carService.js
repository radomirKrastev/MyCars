const carsData = require('../data/carsData');

const addCar = carInfo => carsData.create(carInfo);

const searchCars = filters => {
    //add BE validation
    const matchQuery = {
        make: filters.make,
        model: filters.model,
        year: { $gte: filters.yearFrom, $lte: filters.yearTo },
        price: { $gte: filters.minPrice, $lte: filters.maxPrice },
    };

    return carsData.searchCars(matchQuery);
};

module.exports = {
    addCar,
    searchCars,
};
