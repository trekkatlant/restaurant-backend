require("dotenv").config();
const Sequelize = require("sequelize");

const db = new Sequelize("postgres://postgres:password@postgres.cyufrzd56tm1.us-east-2.rds.amazonaws.com:5432/postgres", 
{
    dialectOptions : {
        ssl : true
    }
});

module.exports = db;