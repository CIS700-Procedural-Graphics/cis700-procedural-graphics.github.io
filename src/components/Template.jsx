
import React, {Component} from 'react'
import {Link} from 'react-router'

import '../style/main.scss'

class Template extends Component {
  render() {
    return (
      <div>
      <nav className="navbar navbar-inverse">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <Link className="navbar-brand" to="/">CIS700 Procedural Graphics</Link>
          </div>

          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li><Link to="/syllabus">Syllabus</Link></li>
              <li><Link to="/schedule">Schedule</Link></li>
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Assignments <span className="caret"></span></a>
                <ul className="dropdown-menu">
                  <li><Link to="/assignments/proj1-noise">Project 1: Noise</Link></li>
                  <li><Link to="/assignments/proj2-toolbox-functions">Project 2: Toolbox Functions</Link></li>
                  <li><Link to="/assignments/proj3-l-systems">Project 3: L-Systems</Link></li>
                  <li><Link to="/assignments/proj4-shape-grammar">Project 4: Shape Grammar</Link></li>
                  <li><Link to="/assignments/proj5-shaders">Project 5: Shaders</Link></li>
                  <li><Link to="/assignments/proj6-marchingcubes">Project 6: Marching Cubes</Link></li>
                  <li><Link to="/assignments/proj6-raymarching">Project 6: Ray Marching</Link></li>
                  <li><Link to="/assignments/proj7-biocrowds">Project 7: BioCrowds</Link></li>
                </ul>
              </li>
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Resources <span className="caret"></span></a>
                <ul className="dropdown-menu">
                  <li><Link to="/resources/javascript-basics">Javascript Basics</Link></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <main className="container">
        {this.props.children}
      </main>
      </div>
    )
  }
} 

export default Template