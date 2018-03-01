import React, { Component } from 'react'

import './index.scss'

class Logo extends Component {
  static defaultProps = {
    className: '',
  }
  
  render() {
    return (
      <div
        className={`Logo ${this.props.className}`}
        style={this.props.style}
      />
    );
  }
}

export default Logo;
