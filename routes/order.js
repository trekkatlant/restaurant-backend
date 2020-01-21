const db = require("../database/db");
const Order = require("../database/models/order");
const OrderItem = require("../database/models/orderItem");
const router = require("express").Router();
const bodyParser = require("body-parser");
const express = require("express");
router.use(bodyParser.json());


router.get("/", async(req,res,next) => {
    try{
        let data = await OrderItem.findAll();
        if(data) {
            res.status(200).json(data);
        }
        else{
            res.status(404).send("no order items found");
        }
    }
    catch(err){
        res.status(400).send(err);
    }
})

router.post("/", async(req,res, next) => {
    try{
        let currentOrder = await Order.create()
        let orderitem = await OrderItem.create({
            itemId : req.body.itemId,
            quantity : req.body.quantity,
        });
        await orderitem.setOrder(currentOrder);
        if(orderitem){
            res.status(201).json(orderitem);
        }  
        else{
            res.status(400).send("order couldn't be made");
        }
      }
      catch(err){
          res.status(400).send(err);
      }
})


module.exports = router;