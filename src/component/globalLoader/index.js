import React from 'react'
import BEM from 'react-bem-classes'

import './index.scss'

import Logo from '../logo'

const bemConfig = {
  block: 'GlobalLoader',
  modifiers: ['isActive']
}
class GlobalLoader extends React.Component {
  render () {
    const { status } = this.props

    return (
      <div className={this.block()}>
        <div
          className={this.element('stripe')}
          style={{
            height: 150 + 1.7 * status,
          }}
        >
          <div className={this.element('status')}>
            {status}%
          </div>
        </div>
        <Logo className={this.element('logo')} />
      </div>
    )
  } 
}

export default BEM(bemConfig)(GlobalLoader)
