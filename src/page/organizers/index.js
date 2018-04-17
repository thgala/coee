import React from 'react'
import BEM from 'react-bem-classes'

import './index.scss'
import DATA from '../../DATA'

import Content from '../../component/content'
import OrganizersList from '../../component/organizersList'
import Text from '../../component/text'

const bemConfig = {
  block: 'OrganizersPage',
}
class OrganizersPage extends React.Component {
  render () {
    return (
      <div className={this.block()}>
        <Content className={this.element('wrap')}>
          <div className={this.element('content')}>
            <div className={this.element('block')}>
              <Text
                h1
                value={DATA.organizersPage.text_1}
                className={this.element('h1')}
              />
              <OrganizersList
                list={DATA.organizersList}
              />
            </div>
            <div className={this.element('block')}>
              <Text
                h1
                value={DATA.organizersPage.text_2}
                className={this.element('h1')}
              />
              <OrganizersList
                list={DATA.organizersListComp}
              />
            </div>
          </div>
        </Content>
      </div>
    )
  } 
}

export default BEM(bemConfig)(OrganizersPage)
