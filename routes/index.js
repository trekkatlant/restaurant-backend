const router = require('express').Router();
const authRoute = require("./auth");
const menuRoute = require("./menu");
const userAddressRoute = require("./userAddress");
router.use("/auth", authRoute);
router.use("/menu", menuRoute);
router.use("/users", userRoute);

router.get("/", (req, res, next) => {
  res.status(200).send("Default API route");
});

module.exports = router;
