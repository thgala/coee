import React from 'react'
import BEM from 'react-bem-classes'

import './index.scss'
import DATA from '../../DATA'

import Content from '../../component/content'
import Logo from '../../component/logo'
import Text from '../../component/text'
import Button from '../../component/button'

const bemConfig = {
  block: 'HomePage',
}
class HomePage extends React.Component {
  render () {
    return (
      <div className={this.block()}>
        <div
          className={this.element('logoText')}
          dangerouslySetInnerHTML={{ __html: DATA.homePage.logoText }}
        />
        <Logo className={this.element('logo')} />
        <div className={this.element('content')}>
          <Text
            h1
            value={DATA.homePage.text_1}
            className={this.element('h1')}
          />
          <Text
            h2
            value={DATA.homePage.text_2}
            className={this.element('h2')}
          />
          <Text
            value={DATA.homePage.text_3}
            className={this.element('p')}
          />
          <Button className={this.element('button')}>
            {DATA.homePage.button_text}
          </Button>
        </div>
      </div>
    )
  } 
}

export default BEM(bemConfig)(HomePage)
