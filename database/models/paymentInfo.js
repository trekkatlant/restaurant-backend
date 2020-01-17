const Sequelize = require("sequelize");
const db = require("../db");

const PaymentInfo = db.define("paymentInfo", {
    firstName : {
        type: Sequelize.STRING,
        allowNull: false
    },
    lastName : {
        type: Sequelize.STRING,
        allowNull: false
    },
    cardNum : {
        type: Sequelize.INT,
        allowNull: false
    },
    secCode: {
        type: Sequelize.INT,
        allowNull: false
    },
    billStreetNum : {
        type: Sequelize.STRING,
        allowNull: false
    },
    billStreet : {
        type: Sequelize.STRING,
        allowNull: false
    },
    billAptNum : {
        type: Sequelize.STRING,
        allowNull: true
    },
    billCity : {
        type: Sequelize.STRING,
        allowNull: false
    },
    billState : {
        type: Sequelize.STRING,
        allowNull: false
    },
    billZip : {
        type: Sequelize.STRING,
        allowNull: false
    },
    userId : {
        type: Sequelize.INT,
        allowNull: false
    }
});

module.exports = PaymentInfo;