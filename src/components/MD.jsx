
import React, {Component} from 'react'
import Template from './Template.jsx'

class MD extends Component {
  render() {
    return (
      <Template>
        <div dangerouslySetInnerHTML={{__html: this.props.md}}></div>
      </Template>
    )
  }
} 

export default MD