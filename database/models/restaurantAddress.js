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
    city: {
        type: Sequelize.STRING,
        allowNull: false
    },
    state : {
        type: Sequelize.STRING,
        allowNull: false
    },
    zipCode : {
        type: Sequelize.STRING,
        allowNull: false
    }
},{
    timestamps: false
});
module.exports = RestaurantAddress;
