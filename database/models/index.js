const User = require("./user");
const UserAddress = require("./userAddress");
const PaymentInfo = require("./paymentInfo");
const Restaurant = require("./restaurant");
const Menu = require("./menu");
const RestaurantAddress = require("./restaurantAddress");
const Order = require("./order");
const OrderItem = require("./orderItem");

UserAddress.belongsTo(User);
User.hasOne(UserAddress);

PaymentInfo.belongsTo(User);
User.hasOne(PaymentInfo);

Menu.belongsTo(Restaurant);
Restaurant.hasOne(Menu);

RestaurantAddress.belongsTo(Restaurant);
Restaurant.hasOne(RestaurantAddress);

Order.belongsTo(User);
User.hasMany(Order);
Order.belongsTo(Restaurant);
Restaurant.hasMany(Order);

OrderItem.belongsTo(Order);
Order.hasMany(OrderItem);

module.exports = { User, UserAddress, PaymentInfo, 
Restaurant, Menu, RestaurantAddress, Order, OrderItem };

