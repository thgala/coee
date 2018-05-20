import React from 'react'
import BEM from 'react-bem-classes'

import './index.scss'
import DATA from '../../DATA'

import Content from '../../component/content'
import TestimonialsList from '../../component/testimonialsList'
import Text from '../../component/text'

const bemConfig = {
  block: 'TestimonialsPage',
}
class TestimonialsPage extends React.Component {
  render () {
    return (
      <div className={this.block()}>
        <div className={this.element('content')}>
          <Text
            h1
            value={DATA.testimonialsPage.text_1}
            className={this.element('h1')}
          />
          <TestimonialsList
            list={DATA.testimonialsList}
          />
        </div>
      </div>
    )
  } 
}

export default BEM(bemConfig)(TestimonialsPage)
