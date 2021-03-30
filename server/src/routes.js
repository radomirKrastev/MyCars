const express = require('express');
const router = express.Router();

// const { verifySignUp } = require('./middleware/verifySignUp');
const userController = require("./controllers/userController");
const carController = require("./controllers/carController");

router.get('/', (req, res) => {
    res.json({message: 'It\'s working... v3'});
});

router.use('/cars', carController);
router.use('/users', userController);

// router.post(
//     "/users",
//     [
//       verifySignUp.checkDuplicateUsernameOrEmail,
//       verifySignUp.checkRolesExisted
//     ],
//     controller.signup
//   );

// router.post("/users", controller.signin);

module.exports = router;


// module.exports = function(app) {
//   app.use(function(req, res, next) {
//     res.header(
//       "Access-Control-Allow-Headers",
//       "x-access-token, Origin, Content-Type, Accept"
//     );
//     next();
//   });

//   app.post(
//     "/api/auth/signup",
//     [
//       verifySignUp.checkDuplicateUsernameOrEmail,
//       verifySignUp.checkRolesExisted
//     ],
//     controller.signup
//   );

//   app.post("/api/auth/signin", controller.signin);
// };
