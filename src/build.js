
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
        <footer>
          <script>
            (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
            (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
            m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
            })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

            ga('create', 'UA-91822551-1', 'auto');
            ga('send', 'pageview');
          </script>
        </footer>

      </html>
    `)
    callback(null, html)
  })
}