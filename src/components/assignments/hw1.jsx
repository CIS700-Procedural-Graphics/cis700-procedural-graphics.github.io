
import React, {Component} from 'react'
import Template from 'src/components/Template.jsx'
import md from 'assignments/HW1.md'

export default class Page extends Component {
  render() {
    return (
      <Template>
        <div dangerouslySetInnerHTML={{__html: md}}></div>
      </Template>
    )
  }
} 