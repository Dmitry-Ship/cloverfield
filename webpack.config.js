const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: [
    'webpack-hot-middleware/client?reload=true',
    './public/routes.js'
  ],
  output: {
    path: __dirname,
    filename: 'bundle.js',
    publicPath: '/'
  },
    resolve: {
    modulesDirectories: ['node_modules', './public'],
    extensions: ['', '.js', '.jsx', 'css', 'styl']
  },
  module: {
    loaders: [
      {
        test: /.js?$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.jsx?$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: ExtractTextPlugin.extract(
          'style', 'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss'
        )
      },
      {
        test: /\.styl$/,
        loaders: [
          'style?sourceMap',
          'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss',
          'stylus?sourceMap'
        ],
        exclude: /node_modules|lib/
      }
    ]
  },
  postcss: [
    require('postcss-easy-import'),
    require('postcss-normalize'),
    require('postcss-utilities'),
    require('postcss-cssnext'),
    require('postcss-short'),
    require('precss'),
    require('lost')
  ],
  stylus: {
    use: [require('rupture')(), require('nib')()],
    import: ["~rupture/rupture/index.styl", '~nib/lib/nib/index.styl']
  },
    plugins: [
        new ExtractTextPlugin("styles.css", {
          allChunks: true
        }),
        // Webpack 1.0
        new webpack.optimize.OccurenceOrderPlugin(),
        // Webpack 2.0 fixed this mispelling
        // new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]
}
