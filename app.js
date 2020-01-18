// const createError = require('http-errors');
// const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const express = require("express");
// const apiRouter = require("./routes/index");
const app = express();
const cors = require("cors");
const db = require("./database");
// const seedDatabase = require("./seed/index")
let PORT = process.env.PORT || 4000;


// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');

// var app = express();

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
// app.use('/users', usersRouter);

// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

db.sync({force : true})
.then(async () => {
  app.use(cors());
  app.listen(PORT, () => {
    console.log("Server is listening on port" + PORT);
  });
});
