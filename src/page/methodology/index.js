import React from 'react'
import BEM from 'react-bem-classes'

import './index.scss'
import DATA from '../../DATA'

import Content from '../../component/content'
import SideTabs from '../../component/sideTabs'
import Text from '../../component/text'
import MethodologyList from '../../component/methodologyList'

const bemConfig = {
  block: 'MethodologyPage',
}
class MethodologyPage extends React.Component {
  render () {
    return (
      <div className={this.block()}>
        <div className={this.element('content')}>
          <Text
            h1
            value={DATA.methodologyPage.text_1}
            className={this.element('h1')}
          />
          <Text
            h2
            value={DATA.methodologyPage.text_2}
            className={this.element('h2')}
          />
        </div>
        <MethodologyList
          className={this.element('methodologyList')}
        />
      </div>
    )
  } 
}

export default BEM(bemConfig)(MethodologyPage)
