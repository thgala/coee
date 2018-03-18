import React from 'react'
import BEM from 'react-bem-classes'

import './index.scss'
import DATA from '../../DATA'
console.log('DATA', DATA.participantsList)

const bemConfig = {
  block: 'ParticipantsList',
}
class ParticipantsList extends React.Component {
  render () {
    return (
      <div className={this.block()}>
        {DATA.participantsList.map((person, index) => (
          <div key={index} className={this.element('item')}>
            <div className={this.element('person')}>
              <div className={this.element('personName')}>
                {person.name}
              </div>
              <div className={this.element('personRole')}>
                {person.role}
              </div>
              <div className={this.element('personProject')}>
                {person.project}
              </div>
            </div>
            <div className={this.element('personIcons')}>
              
            </div>
          </div>
        ))}
      </div>
    )
  } 
}

export default BEM(bemConfig)(ParticipantsList)
