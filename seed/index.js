const { User, UserAddress, PaymentInfo, Restaurant, 
Menu, RestaurantAddress, Order, OrderItem } = require("../database/models");
const items = require("./menu");
const users = require("./user");
const payments = require("./paymentInfo");
const addresses = require("./restaurantAddress");
const restaurants = require("./restaurant");
const userAddresses = require("./userAddress");
const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
// const cookieParser = require("cookie-parser");
// const session = require("express-session");
const SequelizeStore = require("connect-session-sequelize");
const db = require("../database/db");
// const sessionStore = new SequelizeStore({ db });

const PopulateMenuTable = async (items) => {
    for(let i=0; i<items.length; i++) {
        let body = items[i];
        let data = await Menu.create({
            item: body.item,
            price: body.price,
            description: body.description,
            imageUrl: body.imageUrl
        });
    }
};
const PopulateUserTable = async (users) => {
    //for(let i=0; i<users.length; i++) {
        let body = users[0];
        let hash_password = bcrypt.hashSync(body.password, bcrypt.genSaltSync(8));
        let new_user = await User.create({
            email : body.email,
            password : hash_password,
            firstName : body.firstName,
            lastName : body.lastName,
            phoneNum : body.phoneNum,
            points : body.points
        });
    //}
};
const PopulatePaymentInfoTable = async (payments) => {
    //for(let i=0;i<payments.length; i++) {
        let body = payments[0];
        let data = await PaymentInfo.create({
            firstName : body.firstName,
            lastName : body.lastName,
            cardNum : body.cardNum,
            secCode : body.secCode,
            streetNum : body.streetNum,
            street : body.street,
            aptNum : body.aptNum,
            city : body.city,
            state : body.state,
            zipCode : body.zipCode
        });
        //await data.setUser(i+1);
    //}
};
const PopulateRestaurantAddressTable = async (addresses) => {
    // for(let i=0; i<addresses; i++){
        let body = addresses[0];
        let data = await RestaurantAddress.create({
            streetNum : body.streetNum,
            street : body.street,
            city : body.city,
            state : body.state,
            zipCode : body.zipCode
        });
    // }
};
const PopulateRestaurantTable = async (restaurants) => {
    // for(let i=0; i<restaurants; i++){
        let body = restaurants[0];
        let data = await Restaurant.create({
            name : body.name,
            phoneNum : body.phoneNum
        });
    // }
};
const PopulateUserAddressTable = async (userAddresses) => {
    for(let i=0; i<userAddresses; i++){
        let body = userAddresses[i];
        let new_address = await UserAddress.create({
            streetNum : body.streetNum,
            street : body.street,
            aptNum : body.aptNum,
            city : body.city,
            state : body.state,
            zipCode : body.zipCode
        });
        await new_address.setUser(i+1);
    }
};
const seedDatabase = async () => {
    try {
        await PopulateMenuTable(items);
        await PopulateUserTable(users);
        await PopulatePaymentInfoTable(payments);
        await PopulateRestaurantAddressTable(addresses);
        await PopulateRestaurantTable(restaurants);
        await PopulateUserAddressTable(userAddresses);
        console.log("Database populated");
    } catch(err) {
        console.log(err);
    }
};

module.exports = seedDatabase;



