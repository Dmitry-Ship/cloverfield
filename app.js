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

const db = mongoose.connection;
const app = express();

const isDeveloping = process.env.NODE_ENV !== 'production';

mongoose.connect(config.database);

db.on('error', err => console.log('cannot connect to Data Base', err));
db.once('open', () => console.log('connected to Data Base'));

if (isDeveloping) {
  const webpack = require('webpack');
  const webpackMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const webpackConfig = require('./webpack.config.js');

  const compiler = webpack(webpackConfig);

  const middleware = webpackMiddleware(compiler, {
    publicPath: webpackConfig.output.publicPath,
    stats: {
      colors: true,
      hash: false,
      timings: true,
      chunks: false,
      chunkModules: false,
      modules: false,
    },
  });

  app.use(middleware);
  app.use(webpackHotMiddleware(compiler));
}

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'uploads')));
app.use(passport.initialize());
app.use(routes);

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`listening at port ${port}`));
