import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import './component/reset.css/index.css'
import './App.scss';

import Background from './component/background'
import HomePage from './page/home'

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Background />
        <Router>
          <Route exact path="/" component={HomePage} />
        </Router>
      </div>
    );
  }
}

export default App;
