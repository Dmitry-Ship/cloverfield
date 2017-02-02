const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const postcssNormalize = require('postcss-normalize');
const postcssCssnext = require('postcss-cssnext');
const values = require('postcss-modules-values');
const colorFunction = require('postcss-color-function');
const lost = require('lost');
const rupture = require('rupture');
const nib = require('nib');

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: [
    './src/index',
  ],
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  resolve: {
    modulesDirectories: ['node_modules', './src'],
    extensions: ['', '.js', '.jsx', 'css', 'styl'],
  },
  module: {
    loaders: [
      {
        test: /.(js|jsx)?$/,
        loaders: ['babel'],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: ExtractTextPlugin.extract(
          'style',
          'css?modules&importLoaders=1&localIdentName=[hash:base64:5]',
          'postcsss'
        ),
      },
      {
        test: /\.styl$/,
        // loader: ExtractTextPlugin.extract(
        //   'style',
        //   'stylus',
        //   'css?modules&importLoaders=1&localIdentName=[hash:base64:5]',
        //   'postcss'
        //
        // ),
        loaders: [
          'style?sourceMap',
          'css?modules&importLoaders=1&localIdentName=[hash:base64:5]',
          'postcss',
          'stylus?sourceMap',
        ],
        exclude: /node_modules/,
      },
    ]
  },
  postcss: [
    postcssNormalize,
    postcssCssnext,
    values,
    lost,
    colorFunction,
  ],
  stylus: {
    use: [rupture(), nib()],
    import: ['~rupture/rupture/index.styl', '~nib/lib/nib/index.styl'],
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': `'${process.env.NODE_ENV}'`,
    }),
    new ExtractTextPlugin('styles.css'),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.DedupePlugin(),
  ],
};
