const router = require('express').Router();
const authRoute = require("./auth");
const menuRoute = require("./menu");
const userRoute = require("./user");
const orderRoute = require("./order");
const restaurantRoute = require("./restaurant");

router.use("/auth", authRoute);
router.use("/menu", menuRoute);
router.use("/users", userRoute);
router.use("/order", orderRoute);
router.use("/restaurant", restaurantRoute);
router.get("/", (req, res, next) => {
  res.status(200).send("Default API route");
});

module.exports = router;
