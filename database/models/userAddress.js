const Sequelize = require("sequelize");
const db = require("../db");

const UserAddress = db.define("userAddress", {
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
    }
},{
    timestamps: false
});

module.exports = UserAddress;