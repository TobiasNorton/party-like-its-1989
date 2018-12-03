import React, { Component } from 'react'
import './App.css'
import Film from './Film'
import Profile from './Profile'
import FilmList from './FilmList'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <h1>Made in 1989</h1>

          <Route exact path="/" component={FilmList} />
          <Route exact path="/:id" component={Profile} />
        </div>
      </Router>
    )
  }
}

export default App
