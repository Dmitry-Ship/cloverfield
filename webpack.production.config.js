const webpack = require('webpack');
const path = require('path');
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
    modules: [
      path.join(__dirname, 'node_modules'),
      path.join(__dirname, 'src')
    ],
    extensions: ['.js', '.jsx', 'css', 'styl'],
  },
  module: {
    rules: [
      {
        test: /.(js|jsx)?$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              module: true,
              importLoaders: 1,
              localIdentName: '[hash:base64:5]',
            },
          },
          'postcsss-loader'
        ],
      },
      {
        test: /\.styl$/,
        use: [
          'style-loader?sourceMap',
          {
            loader: 'css-loader',
            options: {
              module: true,
              importLoaders: 1,
              localIdentName: '[hash:base64:5]',
            },
          },
          'postcss-loader',
          'stylus-loader?sourceMap',
        ],
        exclude: /node_modules/,
      },
    ]
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      options: {
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
      },
    }),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': `'${process.env.NODE_ENV}'`,
    }),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
};
