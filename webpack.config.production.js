const webpack = require('webpack');
const path = require('path');
const values = require('postcss-modules-values');
const colorFunction = require('postcss-color-function');
const lost = require('lost');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
var ChunkManifestPlugin = require("chunk-manifest-webpack-plugin");

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: './src/index',
  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[chunkhash].js',
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
        test: /\.(png|svg|gif|jpg)?$/,
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
      name: ['vendor'],
      minChunks: function (module) {
        return module.context && module.context.indexOf('node_modules') !== -1;
      },
    }),

    new CompressionPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.(js|html)$/,
      threshold: 10240,
      minRatio: 0.8
    }),

    new ExtractTextPlugin({
      filename: 'style.[contenthash].css',
      ignoreOrder: true,
      allChunks: true,
    }),
    new HtmlWebpackPlugin({
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
      template: './index.html',
    }),
  ],
};
