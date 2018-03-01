import React from 'react'
import BEM from 'react-bem-classes'

import './index.scss'

import Content from '../../component/content'
import Logo from '../../component/logo'
import Text from '../../component/text'

const mock = {
  text_1: 'Be part of an immersive conference about experience design and join an extraordinary community. ',
  text_2: '24-28 September 2018',
  text_3: '38 out of 120 Invitations left ',
}

const bemConfig = {
  block: 'HomePage',
}
class HomePage extends React.Component {
  render () {
    return (
      <div className={this.block()}>
        <Content>
          <Logo className={this.element('logo')} />
          <div className={this.element('content')}>
            <Text
              h1
              value={mock.text_1}
              className={this.element('h1')}
            />
            <Text
              h2
              value={mock.text_2}
              className={this.element('h2')}
            />
            <Text
              value={mock.text_3}
            />
          </div>
        </Content>
      </div>
    )
  } 
}

export default BEM(bemConfig)(HomePage)
