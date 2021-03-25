const express = require('express');
const router = express.Router();
const {verifyToken} = require('../middleware/authorise');

const cloudService = require('../services/cloudService');
const adService = require('../services/adService');

router.post('/', verifyToken, async (req, res) => {
    try {
        const { make, model, year, price, description } = JSON.parse(req.body.sellCarInfo);
        const uploadedImagesPromise = await cloudService.uploadPictures(req.files);
        const uploadedImagesData = await Promise.all(uploadedImagesPromise);

        const adData = { make, model, year, price, description, uploadedImagesData, userId: req.userId };
        await adService.createAd(adData);

        res.json({});
    } catch (err) {
        console.log(err);
        // res.status(400).json({ message: 'Registration failed!' });
    }
});

module.exports = router;
