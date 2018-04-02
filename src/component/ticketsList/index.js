import React from 'react'
import BEM from 'react-bem-classes'

import './index.scss'
import DATA from '../../DATA'

import Icon from '../icon'
import Button from '../button'

const bemConfig = {
  block: 'TicketsList',
}
class TicketsList extends React.Component {
  render () {
    return (
      <div className={this.block()}>
        {DATA.ticketsList.map((ticket, index) => (
          <div key={index} className={this.element('item')}>
            <div className={this.element('itemInner')}>
              <div className={this.element('itemWrap')}>
                <div>
                  <div className={this.element('ticketName')}>
                    {ticket.name}
                  </div>
                  <div className={this.element('ticketPrice')}>
                    {ticket.price}
                  </div>
                </div>
                <div className={this.element('ticketIcon')}>
                  <Icon rombWhite />
                </div>
                <div className={this.element('ticketNote')}>
                  {ticket.note}
                </div>
                <Button
                  white
                  auto
                  className={this.element('button')}>
                  {DATA.ticketsPage.button_text}
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    )
  } 
}

export default BEM(bemConfig)(TicketsList)
