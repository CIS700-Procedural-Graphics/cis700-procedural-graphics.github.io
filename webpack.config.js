const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');
const path = require('path')

module.exports = {
  entry: {
    "main": "./src/index.js"
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
        loaders: ["style-loader", "css-loader", "sass-loader"]
      },
      { 
        test: /\.md$/, 
        loader: "html!markdown"
      } 
    ]
  },
  plugins: [
    new StaticSiteGeneratorPlugin('main', [
      '/',
      '/schedule',
      '/syllabus',
      '/resources',
      '/assignments/hw1-noise'
    ], {})
  ],
  resolve: {
    extensions: ['', '.js', '.jsx'],
    root: [ path.resolve(__dirname) ]
  }
}