import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './component/reset.css/index.css'
import './App.scss';

import Background from './component/background'
import Menu from './component/menu'
import HomePage from './page/home'

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
