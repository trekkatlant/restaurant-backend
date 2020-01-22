const { User, UserAddress, PaymentInfo, Restaurant, 
Menu, RestaurantAddress, Order, OrderItem } = require("../database/models");
const items = require("./menu");
const users = require("./user");
const payments = require("./paymentInfo");
const restaurantAddresses = require("./restaurantAddress";)

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
            city : bill.city,
            state : body.state,
            zipCode : body.zipCode
        });
    }
};
const PopulateRestaurantAddressTable = async (restaurantAddresses) => {
    for(let i=0;i<restaurantAddresses;i++){
        let body = restaurantAddresses[i];
        let data = await RestaurantAddress.create({
            streetNum : body.streetNum,
            street : body.street,
            city : body.city,
            state : body.state,
            zipCode : body.zipCode
        });
    }
};
const seedDatabase = async () => {
    try {
        await PopulateMenuTable(items);
        await PopulateUserTable(users);
        await PopulatePaymentInfoTable(payments);
        await PopulateRestaurantAddressTable(restaurantAddresses);
        console.log("Database populated");
    } catch(err) {
        console.log(err);
    }
};

module.exports = seedDatabase;



