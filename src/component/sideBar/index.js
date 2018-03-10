import React from 'react'
import BEM from 'react-bem-classes'

import './index.scss'

import Text from '../text'

const mock = {
  text_1: `Video trailer`,
  text_2: `The college of extraordinary experiences`,
  text_3: `1 | 14`,
}

const bemConfig = {
  block: 'SideBar',
}

class SideBar extends React.Component {
  componentDidMount() {
    this.calculateRefStyles()
  }

  calculateRefStyles() {
    const sizes = {
      videoTextInnerWidth: this.videoTextInner.offsetWidth,
      videoTextInnerHeight: this.videoTextInner.offsetHeight,
      titleInnerWidth: this.titleInner.offsetWidth,
      titleInnerHeight: this.titleInner.offsetHeight,
    }
    
    this.videoTextInner.style.width = `${sizes.videoTextInnerHeight}px`
    this.videoTextInner.style.height = `${sizes.videoTextInnerWidth}px`

    this.titleInner.style.width = `${sizes.titleInnerHeight}px`
    this.titleInner.style.height = `${sizes.titleInnerWidth}px`
  }

  render () {
    return (
      <div className={this.block()}>
        <div className={this.element('videoIcon')} />
        <div className={this.element('videoText')}>
          <div className={this.element('videoTextInner rotator')} ref={node => this.videoTextInner = node}>
            <Text value={mock.text_1} small/>
          </div>
        </div>
        <div className={this.element('title')}>
          <div className={this.element('titleInner rotator')}  ref={node => this.titleInner = node}>
            <Text value={mock.text_2} small />
          </div>
        </div>
        <div className={this.element('num')}>
          <Text value={mock.text_3} />
        </div>
      </div>
    )
  } 
}

export default BEM(bemConfig)(SideBar)
