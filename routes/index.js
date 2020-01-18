const router = require('express').Router();
const authRoute = require("./auth");
const menuRoute = require("./menu");

router.use("./auth", authRoute);
router.use("./menu", menuRoute);

module.exports = router;
