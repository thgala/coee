import React from 'react'
import BEM from 'react-bem-classes'
import { Collapse } from 'react-collapse'

import './index.scss'
import DATA from '../../DATA'

const bemConfig = {
  block: 'FaqList',
}
class FaqList extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      activeIndex: -1,
    }
  }

  render () {
    const { list } = this.props;
    const { activeIndex } = this.state;

    return list && list.length ? (
      <div className={this.block()}>
        {list.map((item, index) => (
          <div key={index} className={this.element('item', {
            active: activeIndex === index,
          })}>
            <div className={this.element('itemWrap')}>
              <div
                className={this.element('itemTitle')} 
                onClick={() => this.setState({
                  activeIndex: activeIndex === index ? -1 : index
                })}>
                {item.title}
              </div>
              <Collapse isOpened={activeIndex === index}>
                <div className={this.element('itemText')}>
                  {item.text}
                </div>
              </Collapse>
            </div>
          </div>
        ))}
      </div>
    ) : null
  } 
}

export default BEM(bemConfig)(FaqList)
