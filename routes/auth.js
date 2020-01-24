const router = require("express").Router();
const bodyParser = require("body-parser");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { check, validationResult } = require("express-validator");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const User  = require("../database/models/user");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const db = require("../database/db");
const sessionStore = new SequelizeStore({ db });

router.use(bodyParser.json());
router.use(cookieParser());
router.use(session({
  store : sessionStore,
  secret: "byteME",
  resave: false,
  saveUninitialized: false
}));

router.get("/", (req, res, next) => {
  res.status(200).send("Auth API route");
});
router.post("/login", async(req, res, next) => {
  try {
    let user = await User.findOne({ where: { email: req.body.email }});
    if(user) {
      if(bcrypt.compareSync(req.body.password, user.password)) {
        let payload = { email : user.email };
        let token = jwt.sign(payload, "byteME");
        req.session.user = user;
        console.log(req.session)
        res.status(200).send({ user, token });
      } else {
          res.status(401).send("Wrong password")
      }
    } else {
        res.status(401).send("Wrong credentials");
    }
  } catch(err) {
    res.status(400).send(err);
  }
});
router.post("/signup", 
  [check("email").isEmail(),
  check("firstName").isLength({ min:1 }),
  check("lastName").isLength({ min:1 }),
  ], async(req, res, next) => {
    try {
      let firstName = req.body.firstName
      let lastName = req.body.lastName
      firstName = firstName[0].toUpperCase() + firstName.substr(1)
      lastName = lastName[0].toUpperCase() + lastName.substr(1)
      const errors = validationResult(req);
      if(!errors.isEmpty()) {
        res.status(422).json({ errors: errors.array() })
      } else {
          let hash_password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(8));
          let new_user = await User.create({
            email : req.body.email,
            password : hash_password,
            firstName : req.body.firstName,
            lastName : req.body.lastName,
            phoneNum : req.body.phoneNum,
            points : 10
          })
          req.session.user = new_user;
          res.status(201).send(new_user);
        }
    } catch(err) {
        res.status(400).send(err);
    }
});
router.get("/logout", async(req, res, next) => {
  req.session.destroy;
  res.status(200).send("Logged out");
});

module.exports = router;