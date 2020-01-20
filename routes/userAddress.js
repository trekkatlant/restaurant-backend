const bodyParser = require("body-parser");
const express = require("express");
const router = express.Router();
const db = require("../database/db");
const UserAddress  = require("../database/models/userAddress");
router.use(bodyParser.json());

router.get("/:id", async(req, res, next) => {
    try {
        let data = await UserAddress.findOne({
            where: {id: req.params.id}
        });
        if(data) {
            res.status(200).json(data);
        }
        else{
            res.status(404).json(err);
        }
    }
    catch(err){
        res.status(400).send(err);
    }

});

router.post("/", async(req, res, next) => {
    try {
        let useradd = await UserAddress.create({
            streetNum : req.body.streetNum,
            street : req.body.street,
            aptNum : req.body.aptNum,
            city : req.body.city,
            state: req.body.state,
            zipCode : req.body.zipCode
        });
        if(useradd){
            res.status(200).json(useradd);
        }
        else{
            res.status(404).json(useradd);
        }
    }
    catch(err){
        res.status(400).send(err);
    }
})

module.exports = router;