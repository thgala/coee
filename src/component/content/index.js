import React from 'react'

import './index.scss'

import SideBar from '../sideBar'
import Header from '../header'

class Content extends React.Component {
  render () {
    return (
      <div className='Content'>
        <SideBar />
        <div className='Content__wrap'>
          <Header />
          <div className={this.props.className}>
            {this.props.children}
          </div>
        </div>
      </div>
    )
  } 
}

export default Content
