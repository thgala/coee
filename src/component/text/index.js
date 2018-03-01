import React from 'react'
import BEM from 'react-bem-classes'

import './index.scss'

const bemConfig = {
  block: 'Text',
  modifiers: ['h1', 'h2'],
}

class Text extends React.Component {
  render () {
    return (
      <div
        className={this.block()}
        style={this.props.style}
        dangerouslySetInnerHTML={{ __html: this.props.value }}
      />
    )
  } 
}

export default BEM(bemConfig)(Text)
