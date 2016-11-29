const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: [
    './src/routes.js'
  ],
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
    resolve: {
    modulesDirectories: ['node_modules', './src'],
    extensions: ['', '.js', '.jsx']
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
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&importLoaders=1e&localIdentName=[name]__[local]___[hash:base64:5]',
        'postcss-loader'
        )
      },
      {
        test: /\.styl$/,
        loader: 'style-loader!css-loader!stylus-loader'
      }
    ]
  },
  postcss: function () {
    return [
      require('postcss-utilities')(),
      require('postcss-cssnext')(),
      require('postcss-easy-import')(),


    ]
  },
  stylus: {
    use: [require('rupture')(), require('nib')()],
    import: ["~rupture/rupture/index.styl", '~nib/lib/nib/index.styl']
  },
    plugins: [
        new ExtractTextPlugin("styles.css", {
          allChunks: true
        })
    ]
}
