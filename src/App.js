import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter as Router } from 'react-router-dom'
import Fade from 'react-reveal/Fade'

import './component/reset.css/index.css'
import './App.scss';

import Background from './component/background'
import GlobalLoader from './component/globalLoader'
import Menu from './component/menu'
import Content from './component/content'

import HomePage from './page/home'
import ParticipantsPage from './page/participants'
import MethodologyPage from './page/methodology'
import TicketsPage from './page/tickets'
import TestimonialsPage from './page/testimonials'
import WhyPeopleJoinPage from './page/whyPeopleJoin'
import OrganizersPage from './page/organizers'


class App extends Component {
  state = {
    isMenuOpen: false,
    content: {
      isReady: false,
      status: 0,
    }
  }

  getChildContext() {
    return {
      state: this.state,
      actions: {
        handleMenu: this.handleMenu,
      },
    }
  }

  componentDidMount() {
    this.getContent()
  }

  getContent = () => {
    const interval = setInterval(() => {
      const { content } = this.state

      if (!content.isReady) {
        this.setState({
          content: {
            isReady: content.status === 99,
            status: content.status + 1,
          }
        })
      } else {
        clearInterval(interval)
      }
    }, 20)
  }

  handleMenu = () => this.setState(({ isMenuOpen }) => ({ isMenuOpen: !isMenuOpen }))

  render() {
    const { content } = this.state

    return (
      <Router basename='/'>
        <div className='App'>
          <GlobalLoader
            isActive={!content.isReady}
            status={content.status}
          />
          <Background />
          <Menu />

          <Content isReady={content.isReady}>
            <HomePage />
            <Fade bottom>
              <ParticipantsPage />
            </Fade>
            <Fade bottom>
              <MethodologyPage />
            </Fade>
            <Fade bottom>
              <TicketsPage />
            </Fade>
            <Fade bottom>
              <TestimonialsPage />
            </Fade>
            <Fade bottom>
              <WhyPeopleJoinPage />
            </Fade>
            <Fade bottom>
              <OrganizersPage />
            </Fade>
          </Content>
        </div>
      </Router>
    );
  }
}

App.childContextTypes = {
  state: PropTypes.object,
  actions: PropTypes.object,
}

export default App;
