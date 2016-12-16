
import React, {Component} from 'react'

class Template extends Component {
  render() {
    return (
      <html>
        <head>
          <script src="/bower_components/jquery/dist/jquery.min.js"></script>
          <script src="/bower_components/bootstrap/dist/js/bootstrap.min.js"></script>
          <link rel="stylesheet" type="text/css" href="/bower_components/bootstrap/dist/css/bootstrap.min.css" />
          <link rel="stylesheet" type="text/css" href="/styles/main.css" />
        </head>

        <body>
          <nav className="navbar navbar-default">
            <div className="container-fluid">
              <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand" href="/">CIS700 Procedural Graphics</a>
              </div>

              <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav">
                  <li><a href="/syllabus">Syllabus</a></li>
                  <li><a href="/schedule">Schedule</a></li>
                  <li className="dropdown">
                    <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Assignments <span className="caret"></span></a>
                    <ul className="dropdown-menu">
                      <li><a href="/assignments/hw1-noise">HW1: Noise</a></li>
                      <li><a href="/assignments/hw2">HW2: </a></li>
                      <li><a href="/assignments/hw3">HW3: </a></li>
                    </ul>
                  </li>
                  <li><a href="/resources">Resources</a></li>
                </ul>
              </div>
            </div>
          </nav>

          <main className="container">
            {this.props.children}
          </main>
        </body>

      </html>
    )
  }
} 

export default Template