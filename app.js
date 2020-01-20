// const cookieParser = require('cookie-parser');
// const logger = require('morgan');
// const session = require("express-session");
// const passport = require("passport");
// const apiRouter = require("./routes/index");
// const db = require("./database");
// const cors = require("cors");
// const express = require("express");
// const SequelizeStore = require("connect-session-sequelize")(session.Store);
// const sessionStore = new SequelizeStore({db});
// const seedDatabase = require("./seed/index");
// const app = express();

// passport.serializeUser((user, done) => done(null, user.id));
// passport.deserializeUser(async (id, done) => {
//   try{
//     const user = await db.models.user.findByPk(id);
//     done(null, user);
//   }
//   catch (err) {
//     done(err);
//   }
// });

// let PORT = process.env.PORT || 4000;
// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// // app.use(express.static(path.join(__dirname, 'public')));

// db.sync({force : true})
// .then(async () => {
//   seedDatabase();
//   app.use(cors());
//   app.use("/api", apiRouter);
//   app.listen(PORT, () => {
//     console.log("Server is listening on port:" + PORT);
//   });
// });

//*****working app.js*****//


// const express = require("express");
// const apiRouter = require("./routes/index");
// const app = express();
// const cors = require("cors");
// const db = require("./database");
// const seedDatabase = require("./seed/index");
// let PORT = process.env.PORT || 4000;

// db.sync({force:true})
// .then(async () => {
//   seedDatabase();
//   app.use(cors());
//   app.get("/", (req, res, next) => {
//     res.status(200).send("Nothing to see here");
//   });
//   app.use("/api", apiRouter);
//   app.listen(PORT, () => {
//     console.log("Server is listening on port" + PORT);
//   })
// });


const express = require("express");
// const session = require("express-session");
// const passport = require("passport");
// const authRouter = require("./routes/auth");
const apiRouter = require("./routes/index");
const cors = require("cors");

// const SequelizeStore = require("connect-session-sequelize")(session.Store);
const seedDatabase = require("./seed/index");
const db = require("./database");
// const sessionStore = new SequelizeStore({ db });

const app = express();

// passport.serializeUser((user, done) => done(null, user.id));
// passport.deserializeUser(async (id, done) => {
//   try {
//     let user = await db.models.user.findByPk(id);
//     done(null, user);
//   } catch(err) {
//     done(err);
//   }
// });

const syncDb = async () => {
  await db.sync({ force : false });
};
const configureApp = () => {
  app.use(express.json());
  app.use(express.urlencoded({ extended:true }));
  app.use(cors({ credentials: true}));
  // app.use(passport.initialize());
  // app.use(passport.session());
  app.use("/api", apiRouter);
};  
const startListening = () => {
  const PORT = process.env.PORT || 5000;
  app.get("/", async(req, res, next) => {
    res.status(200).send("Nothing to see here");
  });
  app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });
};
const bootApp = async () => {
  // await sessionStore.sync();
  await syncDb();
  await seedDatabase();
  await configureApp();
  await startListening();
};

//fires up everything
bootApp();



