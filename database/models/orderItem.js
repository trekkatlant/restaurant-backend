const Sequelize = require("sequelize");
const db = require("../db");

const OrderItem = db.define("orderItem", {
    quantity : {
        type: Sequelize.INT,
        allowNull: false
    },
    price : {
        type: Sequelize.DECIMAL(10,2),
        allowNull: false
    },
    itemId : {
        type: Sequelize.INT,
        allowNull: false
    }
});

module.exports = OrderItem;