const bodyParser = require("body-parser");
const router = require("express").Router();
const db = require("../database/db");
const Menu  = require("../database/models/menu");
router.use(bodyParser.json());

//gets all menu items
router.get("/", async(req, res, next) => {
    try {
        let data = await Menu.findAll();
        if(!data) {
            res.status(400).send(err);
        } else {
            res.status(200).json(data);
        }
    } catch(err) {
        next(err);
    }
});
//gets menue item with id
router.get("/:id", async(req, res, next) => {
    try {
        let data = await Menu.findOne({ where: { id: req.params.id }});
        if(!data) {
            res.status(404).send(err);
        } else {
            res.status(200).json(data);
        }
    } catch(err) {
        next(err);
    }
});

module.exports = router;