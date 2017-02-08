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
    // contentBase: 'src',
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

  // new WebpackDevServer(webpack(webpackConfig), {
  //   contentBase: './src',
  //   publicPath: webpackConfig.output.publicPath,
  //   hot: true,
  //   historyApiFallback: true,
  //   proxy: {
  //     '*': 'http://localhost:3000',
  //   },
  //   stats: {
  //     colors: true,
  //     timings: true,
  //   },
  // }).listen(8080, 'localhost', (err, result) => {
  //   if (err) { return console.log(err); }
  //   return console.log('listening at 8080');
  // });
}

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(passport.initialize());
app.use(routes);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use((err, req, res) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  // res.render('error');
});

module.exports = app;
