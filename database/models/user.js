const Sequelize = require("sequelize");
const db = require("../db");
const crypto = require("crypto");

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
        allowNull: false,
        unique: true,

    },
    password : {
        type: Sequelize.STRING,
        allowNull: false,
        get() {
            return () => this.getDataValue("password");
        }
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