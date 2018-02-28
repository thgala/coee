import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import './App.css';

import HomePage from './page/home'

class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={HomePage} />
      </Router>
    );
  }
}

export default App;
