import React from 'react'
import BEM from 'react-bem-classes'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import './index.scss'

import Text from '../text'

const mock = {
  list: [
    {
      title: 'Home',
      to: '/',
    },
    {
      title: 'About the event',
      to: '/about',
    },
    {
      title: 'Previous editions',
      to: '/previous-editions',
    },
    {
      title: 'Get a ticket',
      to: '/get-a-ticket',
    },
    {
      title: 'Contact',
      to: '/contact',
    },
  ],
  social: [
    {
      title: 'Tw',
      to: '/',
    },
    {
      title: 'Fb',
      to: '/',
    },
    {
      title: 'In',
      to: '/',
    },
    {
      title: 'Blog',
      to: '/',
    },
  ],
  share: {
    title: 'Share',
    to: '/',    
  }
}

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
          <div className={this.element('logo')} />
          <div className={this.element('list')}>
            {mock.list.map(item => (
              <Link to={item.to} className={this.element('item')}>
                <Text value={item.title} className={this.element('itemText')} />
              </Link>
            ))}
          </div>
        </div>
        <div className={this.element('contacts')}>
          <div>
            {mock.social.map(item => (
              <a href={item.to} className={this.element('contactsItem')} target='_blank'>
                <Text value={item.title}  />
              </a>
            ))}
          </div>
          <a href={mock.share.to} className={this.element('contactsItem')} target='_blank'>
            <Text value={mock.share.title}  />
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
