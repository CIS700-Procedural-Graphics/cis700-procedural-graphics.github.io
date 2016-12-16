
import React from 'react'
import {Router, Route} from 'react-router'
import Index from './components/Index'
import MD from './components/MD'

export default (
  <Router>
    <Route path="/" component={Index}></Route>
    <Route path="/schedule" component={() => (<MD md={require("../SCHEDULE.md")} />)} />
    <Route path="/syllabus" component={() => (<MD md={require("../SYLLABUS.md")} />)} />
    <Route path="/resources" component={() => (<MD md={require("../RESOURCES.md")} />)}>
    </Route>
    <Route path="/assignments">
      <Route path="hw1-noise" component={() => (<MD md={require("../assignments/HW1.md")} />)} />
    </Route>
  </Router>
)
