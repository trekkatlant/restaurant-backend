const db = require("../database/db");
const Order = require("../database/models/order");
const OrderItem = require("../database/models/orderItem");
const router = require("express").Router();
const bodyParser = require("body-parser");
const express = require("express");
router.use(bodyParser.json());

router.post("/:id", async(req,res, next) => {
    try{
        let orderitem = await Order.create({
            itemId : req.body.itemId,
            quantity : req.body.quantity
        });
        if(orderitem){
            res.status(200).json(orderitem);
        }  
        else{
            res.status(404).json(orderitem);
        }
      }
      catch(err){
          res.status(400).send(err);
      }
})

module.exports = router;