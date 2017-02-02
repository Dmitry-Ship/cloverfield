const webpack = require('webpack');
const path = require('path');
const values = require('postcss-modules-values');
const postcssNormalize = require('postcss-normalize');
const postcssCssnext = require('postcss-cssnext');
const colorFunction = require('postcss-color-function');
const lost = require('lost');
const rupture = require('rupture');
const nib = require('nib');

module.exports = {
  devtool: 'source-map',
  entry: [
    './src/index',
    'webpack-hot-middleware/client',
  ],
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  resolve: {
    modules: [
      path.resolve(__dirname, 'node_modules'),
      path.resolve(__dirname, 'src')
    ],
    extensions: ['.js', '.jsx', 'css', 'styl', 'scss'],
  },
  module: {
    rules: [
      {
        test: /.(js|jsx)?$/,
        use: ['react-hot-loader', 'babel-loader'],
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
              localIdentName: '[name]__[local]___[hash:base64:5]',
            },
          },
          'postcss-loader'
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
              localIdentName: '[name]__[local]___[hash:base64:5]',
            },
          },
          'postcss-loader',
          'stylus-loader',
        ],
        exclude: /node_modules/,
      },
    ],
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
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
};
