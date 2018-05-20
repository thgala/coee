import React, { Component } from 'react'
import BackgroundVideoPlayer from 'react-background-video-player'

import './index.scss'

class Background extends Component {
  state = {
    width: '100%',
    height: '100%',
    startTime: 0,
  }

  componentDidMount() {
    this.getWindowSizes()
    // this.updateVideoStartTime()
    window.addEventListener('resize', this.getWindowSizes)
    // window.addEventListener('scroll', this.onScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.getWindowSizes)
    // window.removeEventListener('resize', this.onScroll)
    clearInterval(this.interval)
  }

  onScroll = () => {
    this.setState({
      autoPlay: false,
    })
  }

  updateVideoStartTime = () => {
    this.interval = setInterval(() => {
      this.setState({
        startTime: this.state.startTime + 100,
      }, () => {
        this.video.setCurrentTime(this.state.startTime)
      })
    }, 250)
  }

  getWindowSizes = () => {
    const w = window,
      d = document,
      e = d.documentElement,
      g = d.getElementsByTagName('body')[0],
      width = w.innerWidth || e.clientWidth || g.clientWidth,
      height = w.innerHeight|| e.clientHeight|| g.clientHeight;
      
    this.setState({
      width,
      height,
    })
  }
  
  render() {
    const { width, height, autoPlay, startTime } = this.state

    return (
      <div className='Background'>
        <BackgroundVideoPlayer
          ref={node => this.video = node}
          className='Background__video'
          src={require('./assets/video.mp4')}
          containerWidth={width}
          containerHeight={height}
        />
      </div>
    );
  }
}

export default Background;
