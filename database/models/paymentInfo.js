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
        type: Sequelize.STRING,
        allowNull: false
    },
    secCode: {
        type: Sequelize.STRING,
        allowNull: false
    },
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
    city : {
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
    },
    // userId : {
    //     type: Sequelize.INTEGER,
    //     allowNull: false
    // }
});

module.exports = PaymentInfo;