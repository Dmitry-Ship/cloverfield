const webpack = require('webpack');
const path = require('path');
const values = require('postcss-modules-values');
const colorFunction = require('postcss-color-function');
const lost = require('lost');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: {
    app: './src/index',
    vendor: [
      'react',
      'react-router-dom',
      'react-redux',
      'redux',
      'redux-thunk',
      'axios',
      'react-dom',
      'react-masonry-component',
      'react-textarea-autosize',
      'redux-logger',
      'react-hot-loader',
    ],
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name].bundle.js',
    publicPath: '/',
  },
  resolve: {
    modules: [
      path.join(__dirname, 'node_modules'),
      path.join(__dirname, 'src')
    ],
    extensions: ['.js', '.jsx', 'css', 'scss'],
  },
  module: {
    rules: [
      {
        test: /.(js|jsx)?$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.html$/,
        use: 'html-loader',
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader?modules&importLoaders=1&localIdentName=[hash:base64:5]', 'postcss-loader', 'sass-loader'],
        }),
        exclude: /node_modules/,
      },
      {
        test: /\.(png|svg|gif)?$/,
        use: 'url-loader?limit=10000',
      },
    ],
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: [
          values,
          lost,
          colorFunction,
          autoprefixer,
        ],
      },
    }),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
    }),
    new ExtractTextPlugin({
      filename: 'style.css',
      allChunks: true,
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: './index.html',
    }),
  ],
};
