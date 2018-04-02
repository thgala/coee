import React from 'react'
import BEM from 'react-bem-classes'

import './index.scss'
import DATA from '../../DATA'

import Content from '../../component/content'
import SideTabs from '../../component/sideTabs'
import Text from '../../component/text'
import TicketsList from '../../component/ticketsList'

const bemConfig = {
  block: 'TicketsPage',
}
class TicketsPage extends React.Component {
  render () {
    return (
      <div className={this.block()}>
        <Content className={this.element('wrap')}>
          <div className={this.element('content')}>
            <Text
              h1
              value={DATA.ticketsPage.text_1}
              className={this.element('h1')}
            />
            <Text
              h2
              value={DATA.ticketsPage.text_2}
              className={this.element('h2')}
            />
          </div>
          <TicketsList
            className={this.element('ticketsList')}
          />
        </Content>
      </div>
    )
  } 
}

export default BEM(bemConfig)(TicketsPage)
