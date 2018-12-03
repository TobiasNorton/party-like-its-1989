import React, { Component } from 'react'
import './App.css'
import Film from './Film'
import Profile from './Profile'
import FilmList from './FilmList'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Made in 1989</h1>
        <h3>Movies from 1989 that we'll never forget!</h3>
        <FilmList />
        <Film />
        <Profile />
      </div>
    )
  }
}

export default App
