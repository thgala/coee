import React from 'react'
import BEM from 'react-bem-classes'

import './index.scss'

import SideBar from '../sideBar'
import Header from '../header'

const bemConfig = {
  block: 'Content',
  modifiers: ['isReady']
}
class Content extends React.Component {
  render () {
    return (
      <div className={this.block()}>
        <SideBar />
        <div className={this.element('wrap')}>
          <Header />
          <div className={this.props.className}>
            {this.props.children}
          </div>
        </div>
      </div>
    )
  } 
}

export default BEM(bemConfig)(Content)
