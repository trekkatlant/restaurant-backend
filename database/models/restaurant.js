const Sequelize = require("sequelize");
const db = require("../db");

const Restaurant = db.define("restaurant", {
    name : {
        type: Sequelize.STRING,
        allowNull: false
    },
    phoneNum : {
        type: Sequelize.STRING,
        allowNull: false
    }
},{
    timestamps: false
});

module.exports = Restaurant;