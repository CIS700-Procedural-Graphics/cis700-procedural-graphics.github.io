
import React from 'react'
import { match, RouterContext } from 'react-router'  
import {renderToStaticMarkup} from 'react-dom/server'
import routes from './routes.jsx'

module.exports = function render(locals, callback) {
  match({
    routes,
    location: locals.path
  }, (error, redirectLocation, renderProps) => {
    var html = renderToStaticMarkup(<RouterContext {...renderProps} />)
    callback(null, '<!DOCTYPE html>' + html)
  })
}