import React from 'react'
import BEM from 'react-bem-classes'

import './index.scss'
import DATA from '../../DATA'

const bemConfig = {
  block: 'SideTabs',
}
class SideTabs extends React.Component {
  render () {
    return (
      <div className={this.block()}>
        {DATA.sideTabs.list.map((item, index) => (
          <div key={index} className={this.element('item')}>
            {item}
          </div>
        ))}
      </div>
    )
  } 
}

export default BEM(bemConfig)(SideTabs)
