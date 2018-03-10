import React from 'react'
import BEM from 'react-bem-classes'

import './index.scss'

import Content from '../../component/content'
import Logo from '../../component/logo'
import Text from '../../component/text'
import Button from '../../component/button'

const mock = {
  text_1: `
    Be part of an immersive <br />
    conference about experience design <br />
    and join an extraordinary community.
  `,
  text_2: `
    24-28 September 2018 <br />
    Czocha Castle, Poland
  `,
  text_3: '38 out of 120 Invitations left ',
  button_text: `Apply to join`,
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
              className={this.element('p')}
            />
            <Button className={this.element('button')}>
              {mock.button_text}
            </Button>
          </div>
        </Content>
      </div>
    )
  } 
}

export default BEM(bemConfig)(HomePage)
