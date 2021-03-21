const express = require('express');
const router = express.Router();

// var jwt = require('jsonwebtoken');
// var bcrypt = require('bcryptjs');

const cloudService = require('../services/cloudService');
// const { JWT_SECRET } = require('../constants/env');

router.post('/', async (req, res) => {
    try {
        // console.log(JSON.parse(req.body.sellCarInfo));
        const uploadedImagesPromise = await cloudService.uploadPictures(req.files);

        const uploadedImagesData = await Promise.all(uploadedImagesPromise);

        console.log({uploadedImagesData})
        
        res.json({});
    } catch (err) {
        console.log(err);
        // res.status(400).json({ message: 'Registration failed!' });
    }
});

module.exports = router;
