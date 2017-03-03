const webpack = require('webpack');
const path = require('path');
const values = require('postcss-modules-values');
const colorFunction = require('postcss-color-function');
const lost = require('lost');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: {
    app: './src/index',
    vendor: [
      'react',
      'react-router',
      'react-redux',
      'redux',
      'redux-thunk',
      'axios',
      'react-dom',
      'react-cookie',
      'react-masonry-component',
      'react-textarea-autosize',
      'redux-logger',
      'react-hot-loader',
    ],
  },
  output: {
    path: path.join(__dirname, 'public'),
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
        loader: 'html-loader',
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallbackLoader: 'style-loader',
          loader: ['css-loader?modules&importLoaders=1&localIdentName=[hash:base64:5]', 'postcss-loader', 'sass-loader'],
        }),
        exclude: /node_modules/,
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
        ],
      },
    }),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': `'${process.env.NODE_ENV}'`,
    }),
    new webpack.optimize.AggressiveMergingPlugin(),
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
