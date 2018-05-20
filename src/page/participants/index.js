import React from 'react'
import BEM from 'react-bem-classes'

import './index.scss'
import DATA from '../../DATA'

import Content from '../../component/content'
import SideTabs from '../../component/sideTabs'
import Text from '../../component/text'
import ParticipantsList from '../../component/participantsList'

const bemConfig = {
  block: 'ParticipantsPage',
}
class ParticipantsPage extends React.Component {
  render () {
    return (
      <div className={this.block()}>
        <div className={this.element('content')}>
          <Text
            h1
            value={DATA.participantsPage.text_1}
            className={this.element('h1')}
          />
          <Text
            h2
            value={DATA.participantsPage.text_2}
            className={this.element('h2')}
          />
          <ParticipantsList />
        </div>
        <SideTabs
          className={this.element('sideTabs')}
        />
      </div>
    )
  } 
}

export default BEM(bemConfig)(ParticipantsPage)
