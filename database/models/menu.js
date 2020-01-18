const Sequelize = require("sequelize");
const db = require("../db");

const Menu = db.define("menuItem", {
    item : {
        type: Sequelize.STRING,
        allowNull: false
    },
    price : {
        type: Sequelize.DECIMAL(10,2),
        allowNull: false
    },
    description : {
        type: Sequelize.STRING,
        allowNull: false
    },
    imageUrl : {
        type: Sequelize.STRING,
        allowNull: false
    }
},{
    timestamps: false
});

module.exports = Menu;