// const createError = require('http-errors');
// const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const express = require("express");
// const apiRouter = require("./routes/index");
const app = express();
const cors = require("cors");
const db = require("./database");
const seedDatabase = require("./seed/index");
let PORT = process.env.PORT || 4000;
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

db.sync({force : true})
.then(async () => {
  seedDatabase();
  app.use(cors());
  app.listen(PORT, () => {
    console.log("Server is listening on port:" + PORT);
  });
});
