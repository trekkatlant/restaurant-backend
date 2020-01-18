const { User, UserAddress, PaymentInfo, Restaurant, 
Menu, RestaurantAddress, Order, OrderItem } = require("../database/models");
const items = require("./menu");

const PopulateMenuTable = async (items) => {
    for(let i=0; i<items.length; i++) {
        let body = items[i];
        let data = await Menu.create({
            item: body.item,
            price: body.price,
            description: body.description,
            imageUrl: body.imageUrl
        })
    }
};
const seedDatabase = async () => {
    try {
        await PopulateMenuTable(items);
        console.log("Database populated");
    } catch(err) {
        console.log(err);
    }
};

module.exports = seedDatabase;



