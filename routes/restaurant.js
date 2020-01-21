const db = require("../database/db");
const Restaurant = require("../database/models/restaurant");
const router = require("express").Router();
const bodyParser = require("body-parser");
router.use(bodyParser.json());