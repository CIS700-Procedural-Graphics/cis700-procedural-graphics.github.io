
import React from 'react'
import {Router, Route, browserHistory} from 'react-router'
import MD from './components/MD'

var routes = (
  <Router history={browserHistory}>
    <Route path="/" component={() => (<MD md={require("./README.md")} />)}></Route>
    <Route path="/schedule" component={() => (<MD md={require("./SCHEDULE.md")} />)} />
    <Route path="/syllabus" component={() => (<MD md={require("./SYLLABUS.md")} />)} />
    <Route path="/resources">
      <Route path="javascript-basics" component={() => (<MD md={require("./resources/basics.md")} />)} />
    </Route> 
    <Route path="/assignments">
      <Route path="proj1-noise" component={() => (<MD md={require("../../hw/noise/base/README.md")} />)} />
      <Route path="proj2-toolbox-functions" component={() => (<MD md={require("../../hw/wing/base/README.md")} />)} />
      <Route path="proj3-l-systems" component={() => (<MD md={require("../../hw/lsystems/base/README.md")} />)} />
      <Route path="proj4-shape-grammar" component={() => (<MD md={require("../../hw/shapegrammars/base/README.md")} />)} />
      <Route path="proj5-shaders" component={() => (<MD md={require("../../hw/shaders/base/README.md")} />)} />
      <Route path="proj6-marchingcubes" component={() => (<MD md={require("../../hw/metaballs/base/README.md")} />)} />
      <Route path="proj6-raymarching" component={() => (<MD md={require("../../hw/metaballs2/base/README.md")} />)} />
      <Route path="proj7-biocrowds" component={() => (<MD md={require("../../hw/biocrowds/base/README.md")} />)} />
      <Route path="proj8-substance" component={() => (<MD md={require("./assignments/substanceDesigner.md")} />)} />
    </Route>
  </Router>
)

export default routes