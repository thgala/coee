import React from 'react'
import BEM from 'react-bem-classes'

import './index.scss'
import DATA from '../../DATA'

import Icon from '../icon'

const bemConfig = {
  block: 'MethodologyList',
}
class MethodologyList extends React.Component {
  render () {
    return (
      <div className={this.block()}>
        {DATA.methodologyList.map((methodology, index) => (
          <div key={index} className={this.element('item')}>
            <div className={this.element('itemWrap')}>
              <div className={this.element('methodologyIcon')}>
                <Icon
                  {...{ [methodology.icon]: true }}
                />
              </div>
              <div>
                <div className={this.element('methodologyTitle')}>
                  {methodology.title}
                </div>
                <div className={this.element('methodologyDescription')}>
                  {methodology.description}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    )
  } 
}

export default BEM(bemConfig)(MethodologyList)
