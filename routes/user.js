const db = require("../database/db");
const User = require("../database/models/user");
const UserAddress  = require("../database/models/userAddress");
const router = require("express").Router();
const bodyParser = require("body-parser");
router.use(bodyParser.json());

router.get("/", async(req, res, next) => {
  try {
    let data = User.findAll();
    if(data) {
      res.status(200).json(data);
    } else {
        res.status(404).send("No users found");
    }
  } catch(err) {  
      res.status(400).send(err);
  }
});
router.get("/:id", async(req, res, next) => {
    try {
        let data = await User.findOne({
          where: { id: req.params.id }
        });
        if(data) {
          res.status(200).json(data);
        } else {
            res.status(404).send("User doesn't exist");
        }
    } catch(err) {
        res.status(400).send(err);
    }

});
router.get("/:id/address", async(req, res, next) => {
  try {
    let data = await UserAddress.findOne({
      where: {id: req.param.id}, include: [{ UserAddress }]
    });
  } catch(err) {
      res.status(400).send(err);
  }
});
router.post("/:id/address", async(req, res, next) => {
    try {
        let new_address = await UserAddress.create({
          streetNum : req.body.streetNum,
          street : req.body.street,
          aptNum : req.body.aptNum,
          city : req.body.city,
          state: req.body.state,
          zipCode : req.body.zipCode
        });
        if(new_address){
          res.status(201).json(new_address);
        } else {
            res.status(404).send("Address couldn't be added");
        }
    }
    catch(err){
        res.status(400).send(err);
    }
})

module.exports = router;
