const jwt = require("jsonwebtoken");
// const config = require("../config/auth.config.js");
// const db = require("../models");
// const User = db.user;
// const Role = db.role;

const { JWT_SECRET } = process.env;

verifyToken = (req, res, next) => {
  console.log(req.headers)
  let token = req.headers['x-access-token'];

  if (!token) {
    return res.status(403).send({ message: "No token provided!" });
  }

  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).send({ message: "Unauthorised!" });
    }

    req.userId = decoded.id;
    next();
  });
};

isAdmin = (req, res, next) => {
  //   User.findById(req.userId).exec((err, user) => {
  //     if (err) {
  //       res.status(500).send({ message: err });
  //       return;
  //     }

  //     Role.find(
  //       {
  //         _id: { $in: user.roles }
  //       },
  //       (err, roles) => {
  //         if (err) {
  //           res.status(500).send({ message: err });
  //           return;
  //         }

  //         for (let i = 0; i < roles.length; i++) {
  //           if (roles[i].name === "admin") {
  //             next();
  //             return;
  //           }
  //         }

  //         res.status(403).send({ message: "Require Admin Role!" });
  //         return;
  //       }
  //     );
  //   });
  next();
};

isModerator = (req, res, next) => {
  //   User.findById(req.userId).exec((err, user) => {
  //     if (err) {
  //       res.status(500).send({ message: err });
  //       return;
  //     }

  //     Role.find(
  //       {
  //         _id: { $in: user.roles }
  //       },
  //       (err, roles) => {
  //         if (err) {
  //           res.status(500).send({ message: err });
  //           return;
  //         }

  //         for (let i = 0; i < roles.length; i++) {
  //           if (roles[i].name === "moderator") {
  //             next();
  //             return;
  //           }
  //         }

  //         res.status(403).send({ message: "Require Moderator Role!" });
  //         return;
  //       }
  //     );
  //   });

  next();
};

const authorise = {
  verifyToken,
  isAdmin,
  isModerator
};

module.exports = authorise;
