import React from 'react'
import BEM from 'react-bem-classes'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import './index.scss'
import DATA from '../../DATA'

import Text from '../text'
import Logo from '../logo'

const bemConfig = {
  block: 'Menu',
}

class Menu extends React.Component {
  render () {
    const { state, actions } = this.context
    const { isMenuOpen } = state
    
    return (
      <div className={this.block({ isOpen: isMenuOpen, })}>
        <div className={this.element('close')} onClick={actions.handleMenu} />
        <div className={this.element('content')}>
          <Logo className={this.element('logo')} />
          <div className={this.element('list')}>
            {DATA.menu.list.map((item, i) => (
              <Link key={i} to={item.to} className={this.element('item')} onClick={actions.handleMenu}>
                <Text value={item.title} className={this.element('itemText')} />
              </Link>
            ))}
          </div>
        </div>
        <div className={this.element('contacts')}>
          <div>
            {DATA.menu.social.map((item, i) => (
              <a key={i} href={item.to} className={this.element('contactsItem')} target='_blank'>
                <Text value={item.title}  />
              </a>
            ))}
          </div>
          <a href={DATA.menu.share.to} className={this.element('contactsItem')} target='_blank'>
            <Text value={DATA.menu.share.title}  />
          </a>
        </div>
      </div>
    )
  } 
}

Menu.contextTypes = {
  state: PropTypes.object,
  actions: PropTypes.object,
}

export default BEM(bemConfig)(Menu)
