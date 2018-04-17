import React from 'react'
import BEM from 'react-bem-classes'

import './index.scss'

const bemConfig = {
  block: 'organizersList',
}
class OrganizersList extends React.Component {
  render () {
    const { list } = this.props;

    return (
      <div className={this.block()}>
        {list.map((item, index) => (
          <div key={index} className={this.element('item')}>
            <div className={this.element('itemLogo')}
              style={{
                backgroundImage: `url(${require(`${item.imageUrl}`)})`,
              }}
            />
            {item.name && (
              <div className={this.element('itemName')}>
                {item.name}
              </div>
            )}
          </div>
        ))}
      </div>
    )
  } 
}

export default BEM(bemConfig)(OrganizersList)
