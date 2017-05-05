const path = require('path');
const webpack = require('webpack');
const glob = require('glob');
//Plugin to generate html file
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const bootstrapEntryPoints = require('./webpack.bootstrap.config');

const isProd = process.env.NODE_ENV === 'production';
const cssDev = ['style-loader', 'css-loader', 'sass-loader'];
const cssProd = ExtractTextPlugin.extract({
  fallback: 'style-loader',
  use: ['css-loader', 'sass-loader'],
  publicPath: '/client/public'
});

const cssConfig = isProd ? cssProd : cssDev;
const bootstrapConfig = isProd ? bootstrapEntryPoints.prod : bootstrapEntryPoints.dev;

module.exports = {
  entry: {
    app: './client/src/index.jsx',
    bootstrap: bootstrapConfig
  },
  output: {
    path: path.resolve(__dirname, 'client/public'),
    filename: 'js/[name].bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: cssConfig
      },
      {
        test: /\.jsx$/,
        exclude: /(node_modules|bower_components)/,
        use: 'babel-loader'
      },
      //bootstrap fonts
      {
        test: /\.(woff2?|svg)$/,
        use: 'url-loader?limit=10000&name=/fonts/[name].[ext]'
      },
      {
        test: /\.(ttf|eot)$/,
        use: 'file-loader?name=/fonts/[name].[ext]'
      },
      //jquery for bootstrap
      {
        test:/bootstrap-sass[\/\\]assets[\/\\]javascripts[\/\\]/,
        use: 'imports-loader?jQuery=jquery'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'CookBook',
      template: './client/src/index.ejs' // Load a custom template (ejs by default)
    }),
    new ExtractTextPlugin({
      filename: './css/[name].css',
      //disable plugin when dev mode
      disable: !isProd,
      allChunks: true
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
  ]
};