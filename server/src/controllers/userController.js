const { JWT_SECRET } = process.env;
// const config = require("../config/auth.config");

// const db = require("../models");
// const User = db.user;
// const Role = db.role;
const express = require('express');
const router = express.Router();
const verifySignUp = require('../middleware/verifySignUp');
const userService = require('../services/userService');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');

console.log(verifySignUp);

const register = async (req, res) => {
    try {
        const userData = { username: req.body.username, password: bcrypt.hashSync(req.body.password, 8) };
        const isUsernameOccupied = await userService.checkIsUsernameOccupied(userData.username);

        if (isUsernameOccupied) {
            res.status(400).json({ message: 'Username is already in use! Try different one.' });
        }

        await userService.register(userData);
        res.status(200).send({ message: "User registered successfully!" });
    } catch (err) {
        res.status(400).json({ message: 'Registration failed!' });
    }
};

router.post('/login', async (req, res) => {
//   User.findOne({
//     username: req.body.username
//   })
//     .populate("roles", "-__v")
//     .exec((err, user) => {
//       if (err) {
//         res.status(500).send({ message: err });
//         return;
//       }

//       if (!user) {
//         return res.status(404).send({ message: "User Not found." });
//       }

//       var passwordIsValid = bcrypt.compareSync(
//         req.body.password,
//         user.password
//       );

//       if (!passwordIsValid) {
//         return res.status(401).send({
//           accessToken: null,
//           message: "Invalid Password!"
//         });
//       }

//       var token = jwt.sign({ id: user.id }, JWT_SECRET, {
//         expiresIn: 86400 // 24 hours
//       });

//       var authorities = [];

//       for (let i = 0; i < user.roles.length; i++) {
//         authorities.push("ROLE_" + user.roles[i].name.toUpperCase());
//       }
//       res.status(200).send({
//         id: user._id,
//         username: user.username,
//         email: user.email,
//         roles: authorities,
//         accessToken: token
//       });
//     });
});

router.post('/register', [
    verifySignUp.checkDuplicateUsernameOrEmail,
    verifySignUp.checkRolesExisted
],
    register
);

module.exports = router;
