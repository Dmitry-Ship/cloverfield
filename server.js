const express = require('express')
const path = require('path');
const bodyParser = require('body-parser');

const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config');

const app = express();
const compiler = webpack(webpackConfig);

app.use(webpackDevMiddleware(compiler, {
  publicPath: '/',
  stats: {colors: true}
}));

app.use(webpackHotMiddleware(compiler));

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/button', (req, res) => {
  console.log(`title: ${req.body.title}, content: ${req.body.content}, color: ${req.body.color}`);
});

app.listen(3000, function () {
  console.log('listening on port 3000!')
})
