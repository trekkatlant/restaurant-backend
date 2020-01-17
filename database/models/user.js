const Sequelize = require("sequelize");
const db = require("../db");

const User = db.define("user", {
    firstName : {
        type: Sequelize.STRING,
        allowNull: false
    },
    lastName : {
        type: Sequelize.STRING,
        allowNull: false
    },
    email : {
        type: Sequelize.STRING,
        allowNull: false
    },
    phoneNum: {
        type: Sequelize.STRING,
        allowNull: false
    },
    points : {
        type: Sequelize.INT,
        allowNull: false
    }
});

module.exports = User;