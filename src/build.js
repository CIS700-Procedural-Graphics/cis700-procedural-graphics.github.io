
import React from 'react'
import { match, RouterContext } from 'react-router'  
import {renderToStaticMarkup} from 'react-dom/server'
import routes from './routes.jsx'
import pretty from 'pretty'

module.exports = function render(locals, callback) {
  match({
    routes,
    location: locals.path
  }, (error, redirectLocation, renderProps) => {

    var html = pretty(`
      <!DOCTYPE html>
      <html>
        <head>
          <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
          <link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" />
          <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
          <link href="https://fonts.googleapis.com/css?family=Droid+Sans" rel="stylesheet">
          <link rel="stylesheet" type="text/css" href="/style.css">
        </head>

        <body>
          <div id="root">${renderToStaticMarkup(<RouterContext {...renderProps} />)}</div>
        <body>

      </html>
    `)
    callback(null, html)
  })
}