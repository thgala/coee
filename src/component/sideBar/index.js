import React from 'react'
import BEM from 'react-bem-classes'

import './index.scss'

import Text from '../text'

const mock = {
  text_1: `Video trailer`,
  text_2: `The college of extraordinary experiences`,
}

const bemConfig = {
  block: 'SideBar',
}

class SideBar extends React.Component {

  state = {
    videoTextInnerWidth: null,
    videoTextInnerHeight: null,
    titleInnerWidth: null,
    titleInnerHeight: null,
  }

  componentDidMount() {
    this.calculateRefStyles()
    window.addEventListener('resize', this.calculateRefStyles)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.calculateRefStyles);
  }

  calculateRefStyles = () => {
    this.setState({
      videoTextInnerWidth: `${this.videoTextInner.offsetWidth}px`,
      videoTextInnerHeight: `${this.videoTextInner.offsetHeight}px`,
      titleInnerWidth: `${this.titleInner.offsetWidth}px`,
      titleInnerHeight: `${this.titleInner.offsetHeight}px`,
    })
  }

  render () {
    const {
      videoTextInnerWidth,
      videoTextInnerHeight,
      titleInnerWidth,
      titleInnerHeight,
    } = this.state

    return (
      <div className={this.block()}>
        <div className={this.element('videoIcon')} />
        <div className={this.element('videoText')} ref={node => this.videoTextInner = node}>
          <div
            className={this.element('videoTextInner rotator')}
            style={{
              width: videoTextInnerHeight,
              height: videoTextInnerWidth,
            }}>
            <Text value={mock.text_1} small/>
          </div>
        </div>
        <div className={this.element('title')} ref={node => this.titleInner = node}>
          <div
            className={this.element('titleInner rotator')}
            style={{
              width: titleInnerHeight,
              height: titleInnerWidth,
            }}>
            <Text value={mock.text_2} small />
          </div>
        </div>
        <div className={this.element('num')}>
          <Text value='1' small />
          <Text value='14' small />
        </div>
      </div>
    )
  } 
}

export default BEM(bemConfig)(SideBar)
