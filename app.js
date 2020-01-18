// const createError = require('http-errors');
// const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const session = require("express-session");
const passport = require("passport");
const authRouter = require("./routes/auth");
// const apiRouter = require("./routes");
const cors = require("cors");
const express = require("express");
// const apiRouter = require("./routes/index");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const sessionStore = new SequelizeStore({db});
const db = require("./database");
const seedDatabase = require("./seed/index");

const app = express();

passport.serializeUser((user, done) => done(null, user.id));
passport.deserializeUser(async (id, done) => {
  try{
    const user = await db.models.user.findByPk(id);
    done(null, user);
  }
  catch (err) {
    done(err);
  }
});

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
