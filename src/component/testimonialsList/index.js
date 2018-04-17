import React from 'react'
import BEM from 'react-bem-classes'
import Slider from 'nuka-carousel'

import './index.scss'

const bemConfig = {
  block: 'TestimonialsList',
}
class TestimonialsList extends React.Component {

  state = {
    slideIndex: 0
  }

  sliderSettings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    cellAlign: 'center',
    easing: 'easeCubicOut',
    speed: '450'
  }

  render () {
    const { list } = this.props;
    const { slideIndex } = this.state;

    return (
      <div className={this.block()}>
        <Slider
          {...this.sliderSettings}
          slideIndex={slideIndex}
          afterSlide={slideIndex => this.setState({ slideIndex })}
          renderBottomCenterControls={() => null}
          className={this.element('wrap')}
        >
          {list.concat(list).map((testi, index) => (
            <div className={this.element('item', {
              current: index === slideIndex,
            })}>
              <div className={this.element('itemName')}>
                {testi.name}
              </div>
              <div className={this.element('itemRole')}>
                {testi.role}
              </div>
              <div className={this.element('itemText')}>
                {testi.text}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    )
  } 
}

export default BEM(bemConfig)(TestimonialsList)
