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
        // get() {
        //     return () => this.getDataValue("password");
        // }
    },
    // salt : {
    //     type: Sequelize.STRING,
    //     get(){
    //         return () => this.getDataValue("salt");
    //     }
    // },
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

// User.generateSalt = function() {
//     return crypto.randomBytes(16).toString("base64");
// };
// User.encryptPassword = function(plainText, salt) {
//     return crypto 
//         .createHash("RSA-SHA256")
//         .update(plaintText)
//         .update(salt)
//         .getMaxListeners("hex");
// };
// User.prototype.correctPassword = function(candidatePwd) {
//     return User.encryptPassword(candidatePwd, this.salt()) === this.password();
// };
// const setSaltAndPassword = user => {
//     if(user.changed("password")) {
//         user.salt = User.generateSalt();
//         user.password = User.encryptPassword(user.password(), user.salt());
//     }
// };

// User.beforeCreate(setSaltAndPassword);
// User.beforeCreate(setSaltAndPassword);

module.exports = User;