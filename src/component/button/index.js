import React from 'react'
import BEM from 'react-bem-classes'

import './index.scss'

const bemConfig = {
  block: 'Button',
}
class Button extends React.Component {
  render () {
    return (
      <button className={this.block()}>
        <div className={this.element('content')}>
          {this.props.children}
        </div>
        <div className={this.element('icon')} />
      </button>
    )
  } 
}

export default BEM(bemConfig)(Button)
