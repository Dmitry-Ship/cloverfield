const express = require('express');
const path = require('path');
// const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
//////////////////
const passport = require('passport');
const flash = require('connect-flash');
const session = require('express-session');
///////////////////
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config');

const db = mongoose.connection;
const compiler = webpack(webpackConfig);

const manageNotes = require('./routes/ManageNotes');
const manageLogin = require('./routes/ManageLogin');
const manageLogout = require('./routes/ManageLogout');
const manageSignUp = require('./routes/ManageSignUp');

const app = express();

mongoose.connect('mongodb://localhost/test');
db.on('error', err => console.log('connection error', err));
db.once('open', () => console.log('connected to Data Base'));

app.use(webpackDevMiddleware(compiler, {
  publicPath: '/',
  stats: { colors: true },
}));
app.use(webpackHotMiddleware(compiler));

///////////////
app.use(session({ secret: 'ilovescotchscotchyscotchscotch' })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session
///////////////////
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



app.use('/notes', manageNotes);
app.use('/login', manageLogin);
app.use('/logout', manageLogout);
app.use('/signup', manageSignUp);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  // res.render('error');
});

module.exports = app;
