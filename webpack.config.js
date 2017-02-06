const webpack = require('webpack');
const path = require('path');
const values = require('postcss-modules-values');
const postcssCssnext = require('postcss-cssnext');
const postcssImport = require('postcss-import');
const colorFunction = require('postcss-color-function');
const lost = require('lost');
const rupture = require('rupture');

module.exports = {
  devtool: 'source-map',
  entry: {
    app: [
      './src/index',
      'webpack-hot-middleware/client',
    ],
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
          postcssImport,
          postcssCssnext,
          values,
          lost,
          colorFunction,
        ],
        stylus: {
          use: [rupture()],
          import: ['~rupture/rupture/index.styl'],
        },
      },
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
       // Specify the common bundle's name.
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    // new HtmlWebpackPlugin({
    //   template: 'index.html',
    //   filename: 'index.html',
    //   inject: 'body',
    // }),
    // new webpack.optimize.UglifyJsPlugin(),
    // new webpack.DefinePlugin({
    //   'process.env.NODE_ENV': 'production',
    // }),
    // new webpack.optimize.AggressiveMergingPlugin(),
  ],

};
