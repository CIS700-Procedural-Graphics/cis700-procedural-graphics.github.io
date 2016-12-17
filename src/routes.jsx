
import React from 'react'
import {Router, Route, browserHistory} from 'react-router'
import Index from './components/Index'
import MD from './components/MD'

var routes = (
  <Router history={browserHistory}>
    <Route path="/" component={Index}></Route>
    <Route path="/schedule" component={() => (<MD md={require("./SCHEDULE.md")} />)} />
    <Route path="/syllabus" component={() => (<MD md={require("./SYLLABUS.md")} />)} />
    <Route path="/resources">
      <Route path="javascript-basics" component={() => (<MD md={require("./resources/basics.md")} />)} />
    </Route> 
    <Route path="/assignments">
      <Route path="hw1-noise" component={() => (<MD md={require("../../hw/hw01/base/README.md")} />)} />
    </Route>
  </Router>
)

export default routes