const { User, UserAddress, PaymentInfo, Restaurant, 
Menu, RestaurantAddress, Order, OrderItem } = require("../database/models");
const items = require("./menu");
const users = require("./user");
const payments = require("./paymentInfo");
const addresses = require("./restaurantAddress");
const restaurants = require("./restaurant");

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
    for(let i=0; i<users.length; i++) {
        let body = users[i];
        let data = await User.create({
            email : body.email,
            password : body.password,
            firstName : body.firstName,
            lastName : body.lastName,
            phoneNum : body.phoneNum,
            points : body.points
        });
    }
};
const PopulatePaymentInfoTable = async (payments) => {
    for(let i=0;i<payments.length; i++) {
        let body = payments[i];
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
    }
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
const seedDatabase = async () => {
    try {
        await PopulateMenuTable(items);
        await PopulateUserTable(users);
        await PopulatePaymentInfoTable(payments);
        await PopulateRestaurantAddressTable(addresses);
        await PopulateRestaurantTable(restaurants);
        console.log("Database populated");
    } catch(err) {
        console.log(err);
    }
};

module.exports = seedDatabase;



