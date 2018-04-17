import React from 'react'
import BEM from 'react-bem-classes'
import Slider from 'nuka-carousel'

import './index.scss'

const bemConfig = {
  block: 'TestimonialsList',
}
class TestimonialsList extends React.Component {

  sliderSettings = {}

  render () {
    const { list } = this.props;

    return (
      <div className={this.block()}>
        <div className={this.element('wrap')}>
          {list.map((testi, index) => (
            <div className={this.element('item')}>
              1
            </div>
          ))}
        </div>
      </div>
    )
  } 
}

export default BEM(bemConfig)(TestimonialsList)
