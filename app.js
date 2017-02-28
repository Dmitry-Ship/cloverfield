const express = require('express');
const path = require('path');
// const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');
const routes = require('./routes');
const config = require('./config/main');
const frontEndMiddleware = require('./middleware/frontEndMiddleware');

const db = mongoose.connection;
const app = express();

mongoose.connect(config.database);

db.on('error', err => console.log('cannot connect to Data Base', err));
db.once('open', () => console.log('connected to Data Base'));

app.use(logger('dev'));
app.use(cookieParser());
app.use(passport.initialize());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(routes);

frontEndMiddleware(app);

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`listening at port ${port}`));
