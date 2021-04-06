const express = require('express');
const router = express.Router({ mergeParams: true });
const {verifyToken} = require('../middleware/authorise');

const cloudService = require('../services/cloudService');
const carService = require('../services/carService');

router.post('/', verifyToken, async (req, res) => {
    try {
        const { make, model, year, price, description } = JSON.parse(req.body.sellCarInfo);
        const uploadedImagesPromise = await cloudService.uploadPictures(req.files);
        const uploadedImagesData = await Promise.all(uploadedImagesPromise);

        const carData = { make, model, year, price, description, uploadedImagesData, userId: req.userId };
        await carService.addCar(carData);
        console.log(carData)
        res.json({});
    } catch (err) {
        console.log(err);
        res.status(400).json({ message: 'Add car failed!' });
    }
});

router.get('/', verifyToken, async (req, res) => {
    try {
        const { userId } = req.params;
        const cars = await carService.getUserCars(userId);

        res.json(cars);
    } catch (err) {
        console.log(err);
        res.status(400).json({ message: 'Get cars failed!' });
    }
});

router.post('/:carId', verifyToken, async (req, res) => {
    try {
        const { userId, carId } = req.params;
        const { offerDescription } =req.body;

        await carService.addCarBuyOffer(carId, { userId, offerDescription });

        res.json({});
    } catch (err) {
        console.log(err);
        res.status(400).json({ message: 'Make car offer failed!' });
    }
});

router.put('/:carId', verifyToken, async (req, res) => {
    try {
        const { carId } = req.params;
        const { make, model, year, price, description } = JSON.parse(req.body.sellCarInfo);

        let carData = { make, model, year, price, description, userId: req.userId };
        
        if (req.files) {
            const uploadedImagesPromise = await cloudService.uploadPictures(req.files);
            const uploadedImagesData = await Promise.all(uploadedImagesPromise);
            carData = { ...carData, uploadedImagesData };
        }

        await carService.updateCar(carId, carData);

        res.json({ _id: carId, ...carData });
    } catch (err) {
        console.log(err);
        res.status(400).json({ message: 'Add car failed!' });
    }
});

module.exports = router;
