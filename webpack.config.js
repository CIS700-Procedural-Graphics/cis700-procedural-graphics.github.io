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
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'file?name=fonts/[name].[ext]'
      },
      {
        test: /\.(obj|bmp|gif|png)$/,
        loader: 'file-loader?name=./assets/[name]-[hash:6].[ext]'
      }
    ]
  },
  plugins: [
    new StaticSiteGeneratorPlugin('build', [
      '/',
      '/schedule',
      '/syllabus',
      '/resources',
      '/assignments/proj1-noise',
      '/assignments/proj2-toolbox-functions',
      '/assignments/proj3-l-systems',
      '/assignments/proj4-shape-grammar',
      '/assignments/proj5-shaders',
      '/assignments/proj6-marchingcubes',
      '/assignments/proj6-raymarching',
      '/assignments/proj7-biocrowds',
      '/assignments/proj8-substance',
      '/assignments/final-project',
      '/resources/javascript-basics'
    ], {}),
    new ExtractTextPlugin('style.css')
  ],
  resolve: {
    extensions: ['', '.js', '.jsx'],
    root: [ path.resolve(__dirname) ]
  }
}