import React from 'react'
import PropTypes from 'prop-types'

import './index.scss'

class Header extends React.Component {
  render () {
    const { actions } = this.context

    return (
      <div className='Header'>
        <div className='Header__content'>

        </div>
        <div className='Header__menuTriggerWrap'>
          <div className='Header__menuTrigger' onClick={actions.handleMenu} />
        </div>
      </div>
    )
  } 
}

Header.contextTypes = {
  actions: PropTypes.object,
}

export default Header
