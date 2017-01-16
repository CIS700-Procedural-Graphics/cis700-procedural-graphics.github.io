
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
                  <li><Link to="/assignments/hw1-noise">HW1: Noise</Link></li>
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