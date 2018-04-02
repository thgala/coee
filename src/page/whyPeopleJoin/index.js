import React from 'react'
import BEM from 'react-bem-classes'

import './index.scss'
import DATA from '../../DATA'

import Content from '../../component/content'
import Logo from '../../component/logo'
import Text from '../../component/text'
import Button from '../../component/button'

import FAQList from '../../component/faqList'

const bemConfig = {
  block: 'WhyPeopleJoinPage',
}
class WhyPeopleJoin extends React.Component {
  render () {
    return (
      <div className={this.block()}>
        <Content className={this.element('wrap')}>
          <div className={this.element('content')}>
            <Text
              h1
              value={DATA.whyPeopleJoin.text_1}
              className={this.element('h1')}
            />
            <div className={this.element('list')}>
              <FAQList
                list={DATA.whyList}
              />
            </div>
          </div>
        </Content>
      </div>
    )
  } 
}

export default BEM(bemConfig)(WhyPeopleJoin)
