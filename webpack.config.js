const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const postcsseEasyImport = require('postcss-easy-import');
const postcssNormalize = require('postcss-normalize');
const postcssUtilities = require('postcss-utilities');
const postcssCssnext = require('postcss-cssnext');
const postcssShort = require('postcss-short');
const precss = require('precss');
const lost = require('lost');
const rupture = require('rupture');
const nib = require('nib');

module.exports = {
  entry: [
    'webpack/hot/dev-server',
    'webpack-hot-middleware/client?reload=true',
    './src',
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
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react', 'stage-2'],
        },
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: ExtractTextPlugin.extract(
          'style', 'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss'
        ),
      },
      {
        test: /\.styl$/,
        loaders: [
          'style?sourceMap',
          'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss',
          'stylus?sourceMap',
        ],
        exclude: /node_modules/,
      },
    ]
  },
  postcss: [
    postcsseEasyImport,
    postcssNormalize,
    postcssUtilities,
    postcssCssnext,
    postcssShort,
    precss,
    lost,
  ],
  stylus: {
    use: [rupture(), nib()],
    import: ['~rupture/rupture/index.styl', '~nib/lib/nib/index.styl'],
  },
  plugins: [
    new ExtractTextPlugin('styles.css', {
      allChunks: true,
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ],
};
