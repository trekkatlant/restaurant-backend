const Sequelize = require("sequelize");
const db = require("../db");
const crypto = require("crypto");

const User = db.define("user", {
    email : {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    password : {
        type: Sequelize.STRING,
        allowNull: false,
    },
    firstName : {
        type: Sequelize.STRING,
        // allowNull: false
    },
    lastName : {
        type: Sequelize.STRING,
        // allowNull: false
    },
    phoneNum: {
        type: Sequelize.STRING,
        // allowNull: false
    },
    points : {
        type: Sequelize.INTEGER,
        // allowNull: false
    }
},{
    timestamps: false
});

module.exports = User;