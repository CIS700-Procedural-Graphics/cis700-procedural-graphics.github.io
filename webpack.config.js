const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const path = require('path')

module.exports = {
  entry: {
    // "./src/": "./src/index.js",
    "build": "./src/build.js"
  },
  output: {
    filename: "bundle.js",
    path: __dirname,
    libraryTarget: "umd"
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      }, 
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract(
            'style',
            'css!sass'
        )
      },
      { 
        test: /\.md$/, 
        loader: "html!markdown"
      } 
    ]
  },
  plugins: [
    new StaticSiteGeneratorPlugin('build', [
      '/',
      '/schedule',
      '/syllabus',
      '/resources',
      '/assignments/hw1-noise',
      '/resources/javascript-basics'
    ], {}),
    new ExtractTextPlugin('style.css')
  ],
  resolve: {
    extensions: ['', '.js', '.jsx'],
    root: [ path.resolve(__dirname) ]
  }
}