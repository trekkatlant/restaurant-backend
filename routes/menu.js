const db = require("../database/db");
const Menu  = require("../database/models/menu");
const router = require("express").Router();
const bodyParser = require("body-parser");
router.use(bodyParser.json());

//gets all menu items
router.get("/", async(req, res, next) => {
    try {
        let data = await Menu.findAll();
        if(data) {
            res.status(200).json(data);
        } else {
            res.status(400).send(err);
        }
    } catch(err) {
        res.status(400).send(err);
    }
});
//gets menue item with id
router.get("/:id", async(req, res, next) => {
    try {
        let data = await Menu.findOne({ where: { id: req.params.id }});
        if(data) {
            res.status(200).json(data);
        } else {
            res.status(404).json(err);
        }
    } catch(err) {
        res.status(400).send(err);
    }
});

module.exports = router;