const isDeveloping = process.env.NODE_ENV !== 'production';
const path = require('path');
const express = require('express');

module.exports = (app) => {
  if (isDeveloping) {
    const webpack = require('webpack');
    const webpackMiddleware = require('webpack-dev-middleware');
    const webpackHotMiddleware = require('webpack-hot-middleware');
    const webpackConfig = require('../webpack.config.js');

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

    app.use(express.static(path.join(__dirname, '../public')));
    app.use(express.static(path.join(__dirname, '../uploads')));

    const fs = middleware.fileSystem;

    app.get('*', (req, res) => {
      fs.readFile(path.join(compiler.outputPath, 'index.html'), (err, file) => {
        if (err) {
          res.sendStatus(404);
        } else {
          res.send(file.toString());
        }
      });
    });
  } else {
    app.use(express.static(path.join(__dirname, '../public')));
    app.use(express.static(path.join(__dirname, '../uploads')));
    // app.get('*.js', function (req, res, next) {
    //   req.url = req.url + '.gz';
    //   res.set('Content-Encoding', 'gzip');
    //   next();
    // });
    
    app.use(express.static(path.join(__dirname, '../build')));
    app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, '../build/index.html')));
  }
};
