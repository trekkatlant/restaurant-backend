const db = require("../database/db");
const User = require("../database/models/user");
const UserAddress  = require("../database/models/userAddress");
const PaymentInfo = require("../database/models/paymentInfo");
const router = require("express").Router();
const bodyParser = require("body-parser");
router.use(bodyParser.json());

router.get("/", async(req, res, next) => {
  try {
    let data = await User.findAll();
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
    let data = await UserAddress.findAll();
    // ({
    //   where: { id: req.param.id }, include: [{ UserAddress }]
    // });
    if(data) {
      res.status(200).json(data);
    } else {
        res.status(404).send("User address not found");
    }
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
        await new_address.setUser(id);
        if(new_address){
          res.status(201).json(new_address);
        } else {
            res.status(404).send("Address couldn't be added");
        }
    } catch(err){
        res.status(400).send(err);
    }
});
router.get("/:id/payment", async(req, res, next) => {
  try {
    let data = await PaymentInfo.findAll();
    // ({
    //   where: { userId: req.body.id }, include: [{ User }]
    // });
    if(data) {
      res.status(200).json(data);
    } else {
        res.status(401).send("Payment info not found");
    }
  } catch(err) {
      res.status(400).send(err);
  }
});
router.put("/:id/payment", async(req, res, next) => {
  try {
    let data = await PaymentInfo.update({
      firstName : req.body.firstName,
      lastName : req.body.lastName,
      streetNum : req.body.streetNum,
      street : req.body.street,
      aptNum : req.body.aptNum,
      city : req.body.city,
      state: req.body.state,
      zipCode : req.body.zipCode
    },
    { where: { userId:id }});
    if(data) {
      res.status(200).send("Payment info update successful");
    } else {
      res.status(400).send("Payment info update unsuccessful");
    }
  } catch(err) {
    res.status(400).send(err);
  }
});
router.post("/:id/payment", async(req, res, next) => {
  try {
    let new_payment = await PaymentInfo.create({
      firstName : req.body.firstName,
      lastName : req.body.lastName,
      cardNum : req.body.cardNum,
      secCode : req.body.secCode,
      streetNum : req.body.streetNum,
      street : req.body.street,
      aptNum : req.body.aptNum,
      city : req.body.city,
      state : req.body.state,
      zipCode : req.body.zipCode
    });
    await new_payment.setUser(id);
    if(new_payment) {
      res.status(201).send("Payment info successfully added");
    } else {
        res.status(400).send("Payment info couldn't be added");
    }
  } catch(err) {
      res.status(400).send(err);
  }
});

module.exports = router;
