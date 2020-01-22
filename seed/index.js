const { User, UserAddress, PaymentInfo, Restaurant, 
Menu, RestaurantAddress, Order, OrderItem } = require("../database/models");
const items = require("./menu");
const users = require("./user");

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
const seedDatabase = async () => {
    try {
        await PopulateMenuTable(items);
        await PopulateUserTable(users);
        console.log("Database populated");
    } catch(err) {
        console.log(err);
    }
};

module.exports = seedDatabase;



