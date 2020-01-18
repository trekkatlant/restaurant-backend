const router = require("express").Router();
const { User } = require("../database/models/user");

router.post("/login", async (req, res, next) => {
  try {
    let user = await User.findOne({ where: { email: req.body.email } });
    if (!user) {
      res.status(401).send("Wrong username and/or password");
    }
    else if (!user.correctPassword(req.body.password)) {
      res.status(401).send("Wrong username and/or password");
    }
    else {
      req.login(user, err => (err ? next(err) : res.json(user)));
    }
  }
  catch (err) {
    next(err);
  }
});

router.post("/signup", async (req, res, next) => {
  // res.send("rggre")
  try {
    let body = req.body;
    let user = await User.create({
      firstName : body.firstName,
      lastName : body.lastName,
      email : body.email,
      password : body.password,
      phoneNum : body.phoneNum,
      point : body.poins
    });
    req.login(user, err => (err ? next(err) : res.json(user)));
  }
  catch (err) {
    if (err.name === "SequelizeUniqueConstraintError") {
      res.status(401).send("User already exists");
    }
    else {
      next(err);
    }
  }
});

router.delete("/logout", (req, res, next) => {
  req.logout();
  req.session.destroy((err) => {
    if (err) {
      return next(err);
    }
    else {
      res.status(204).end();
    }
  });
});


module.exports = router;