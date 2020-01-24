const db = require("../database/db");
const Order = require("../database/models/order");
const OrderItem = require("../database/models/orderItem");
const router = require("express").Router();
const bodyParser = require("body-parser");
const express = require("express");
const sendMessage = require("./sendMessage");
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
});
router.post("/", async(req,res, next) => {
    try{
        let new_order = await Order.create();
        await new_order.setUser(1);
        if(new_order) {
            res.status(201).json(new_order);
        } else {
            res.status(400).send("Order not created");
        }
      }
      catch(err){
          res.status(400).send(err);
      }
});
router.post("/item", async(req, res, next) => {
    try {
        let new_item = OrderItem.create({
            quantity : req.body.quantity,
            itemId : req.body.itemId,
            orderId  : req.body.orderId
        });
        if(new_item) {
            res.status(201).send("Item added to order");
            sendMessage("9178868762", "Your order has been received!");
            sendMessage("9178868762", "New order has been made!");
        } else {
            res.status(400).send("Item not added to order");
        }
    } catch(err) {
        res.statusMessage(400).send(err);
    }
});

module.exports = router;