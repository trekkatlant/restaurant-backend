const Sequelize = require("sequelize");
const db = require("../db");

const OrderItem = db.define("orderItem", {
    quantity : {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    // price : {
    //     type: Sequelize.DECIMAL(10,2),
    //     allowNull: false
    // },
    menuItemId : {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});

module.exports = OrderItem;