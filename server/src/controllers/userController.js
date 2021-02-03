const express = require('express');
const router = express.Router();

var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');

const userService = require('../services/userService');
const { JWT_SECRET } = require('../constants/env');

router.post('/register', async (req, res) => {
    try {
        const userData = { username: req.body.username, password: bcrypt.hashSync(req.body.password, 8) };
        const isUsernameOccupied = await userService.checkIsUsernameOccupied(userData.username);

        if (isUsernameOccupied) {
            res.status(400).json({ message: 'Username is already in use! Try different one.' });
        } else {
            await userService.register(userData);
            res.status(200).send({ message: "User registered successfully!" });
        }

    } catch (err) {
        res.status(400).json({ message: 'Registration failed!' });
    }
});

router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const userRecord = await userService.getUserByUsername(username);

    if (!userRecord) {
        res.status(400).json({ message: 'Wrong username.' });
    }

    const passwordIsValid = bcrypt.compareSync(password, userRecord.password);

    if (!passwordIsValid) {
        return res.status(401).json({
            accessToken: null,
            message: "Invalid Password!"
        });
    }

    const accessToken = jwt.sign({ id: userRecord._id }, JWT_SECRET, {
        expiresIn: 86400 // 24 hours
    });

    const { password: passwordDb, ...rest } = userRecord;
    res.json({ ...rest, accessToken });
});

module.exports = router;
