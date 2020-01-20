const router = require("express").Router();
const bodyParser = require("body-parser");
const User  = require("../database/models/user");
router.use(bodyParser.json());
const db = require("../database/db");

router.post("/login", async(req, res, next) => {
  try {
    let user = await User.findOne({ where: { email: req.body.email }});
    if(!user) {
      res.status(401).send("Wrong credentials");
    } else if(!user.correctPassword(req.body.password)) {
      res.status(401).send("Wrong credentials");
    } else {
      req.login(user, err => (err ? next(err) : res.json(user)));
    }
  } catch(err) {
      res.status(401).send(err);
  }
});
// router.post("/signup", async (req, res, next) => {
//   try {
//     let user = await User.create({
//       email : req.body.email,
//       password : req.body.password,
//     });
//     if(user) {
//       res.status(201).send("User created");
//     } else {
//       res.status(400).send("User not created");
//     }
//   } catch(err) {
//       res.status(400).send(err);
//   }
// });
router.post("/signup", async(req, res, next) => {
  //res.send("dfwfwe")
  try {
    let user = await User.create({
      email : req.body.email,
      password : req.body.password,
      firstName : req.body.firstName,
      lastName : req.body.lastName,
      phoneNum : req.body.phoneNum,
      points : req.body.points
    });
    if(user) {
      req.login(user, err => (err ? next(err) : res.json(user)));
    }
    
  } catch(err) {
      if(err.name === "SequelizeUniqueConstraintError") {
        res.status(401).send("User already exists");
      } else {
        res.status(401).send(err);
      }
    }
});
router.delete("/logout", (req, res, next) => {
  req.logout();
  req.session.destroy((err) => {
    if(err) {
      return next(err);
    } else {
      res.status(201).end();
    }
  });
});

module.exports = router;