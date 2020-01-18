const Sequelize = require("sequelize");
const db = require("../db");

const RestaurantAddress = db.define("restaurantAddress", {
    streetNum : {
        type: Sequelize.STRING,
        allowNull: false
    },
    street : {
        type: Sequelize.STRING,
        allowNull: false
    },
    aptNum : {
        type: Sequelize.STRING,
        allowNull: true
    },
    city: {
        type: Sequelize.STRING,
        allowNull: false
    },
    State : {
        type: Sequelize.STRING,
        allowNull: false
    },
    zipCode : {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});
module.exports = RestaurantAddress;
