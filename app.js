const express = require('express')
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config');
const db = mongoose.connection;
const compiler = webpack(webpackConfig);

const createItem = require('./controllers/createItem');

const app = express();

mongoose.connect('mongodb://localhost/notes');
db.on('error',  err => console.log('connection error', err));
db.once('open', () => console.log('connected to Data Base'));

app.use(webpackDevMiddleware(compiler, {
  publicPath: '/',
  stats: {colors: true}
}));
app.use(webpackHotMiddleware(compiler));

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/submit', createItem);

app.listen(3000, () => console.log('listening on port 3000!'))
