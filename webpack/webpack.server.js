const { root } = require('./helpers');

const { AotPlugin } = require('@ngtools/webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const ScriptExtPlugin = require('script-ext-html-webpack-plugin');

const CopyWebpackPlugin = require('copy-webpack-plugin');

const helpers = require('./helpers');



//require('bootstrap/dist/css/bootstrap.min.css');

/**
 * This is a client config which should be merged on top of common config
 */
module.exports = {
  entry: root('./src/main.server.ts'),
  output: {
    path: helpers.root('dist'),
    filename: 'static/client.js',
    sourceMapFilename: 'client.js.map',
    publicPath: "/assets/"
  },
  resolve: {
    extensions: ['.ts', '.js', '.json','.fs','.net']
  },
  target: 'node',
  module: {
    rules: [
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      },
      {
        test: /\.(jpg|png|svg|eot|ttf|woff|woff2)$/,
        loader: 'file-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: root('./src/index.html'),
      output: root('dist'),
      inject: 'body'
    }),
    new ScriptExtPlugin({
      defaultAttribute: 'defer'
    }),
    new CopyWebpackPlugin([
      { from: 'src/assets/images', to: 'assets/images' },
      { from: 'src/assets/fonts', to: 'assets/fonts' }
    ])
  ]
};

