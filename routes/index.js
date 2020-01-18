const router = require('express').Router();
const authRoute = require("./auth");
const menuRoute = require("./menu");

router.use("/auth", authRoute);
router.use("/menu", menuRoute);

router.get("/", (req, res, next) => {
  res.status(200).send("Default API route");
});

module.exports = router;
