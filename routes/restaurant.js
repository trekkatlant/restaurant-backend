const db = require("../database/db");
const Restaurant = require("../database/models/restaurant");
const RestaurantAddress = require("../database/models/restaurantAddress");
const router = require("express").Router();
const bodyParser = require("body-parser");
router.use(bodyParser.json());

router.get("/", async(req, res, next) => {
    try {
        let data = await Restaurant.findAll();
        if(data) {
            res.status(200).json(data);
        } else {
            res.status(404).send("no restaurant found");
        }
    } catch(err) {
        res.status(400).send(err);
    }
});
router.get("/address", async(req, res, next) => {
    try {
        let data = await RestaurantAddress.findAll();
        if(data) {
            res.status(200).json(data);
        } else {
            res.status(404).send("no address found")
        }
    } catch(err) {
        res.status(400).send(err);
    }
});

module.exports = router;