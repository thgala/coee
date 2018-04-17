import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './component/reset.css/index.css'
import './App.scss';

import Background from './component/background'
import Menu from './component/menu'
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
  }

  getChildContext() {
    return {
      state: this.state,
      actions: {
        handleMenu: this.handleMenu,
      },
    }
  }

  handleMenu = () => this.setState(({ isMenuOpen }) => ({ isMenuOpen: !isMenuOpen }))

  render() {
    return (
      <Router>
        <div className='App'>
          <Background />
          <Menu />
          <Route exact path="/" component={HomePage} />
          <Route exact path="/participants" component={ParticipantsPage} />
          <Route exact path="/methodology" component={MethodologyPage} />
          <Route exact path="/get-a-ticket" component={TicketsPage} />
          <Route exact path="/testimonials" component={TestimonialsPage} />
          <Route exact path="/why-people-join" component={WhyPeopleJoinPage} />
          <Route exact path="/organizers" component={OrganizersPage} />
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
