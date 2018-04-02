import React from 'react'
import BEM from 'react-bem-classes'

import './index.scss'

const bemConfig = {
  block: 'Icon',
  modifiers: ['romb', 'round', 'square', 'rombWhite']
}
class Icon extends React.Component {
  render () {
    return (
      <div className={this.block()} />
    )
  } 
}

export default BEM(bemConfig)(Icon)
