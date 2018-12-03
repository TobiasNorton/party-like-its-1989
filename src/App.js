import React, { Component } from 'react'
import './App.css'
import Film from './Film'
import Profile from './Profile'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Party Like It's 1989!</h1>
        <h3>Movies from 1989 that we'll never forget!</h3>

        <main className="movies-area">
          <Film />
        </main>
        <Profile />
      </div>
    )
  }
}

export default App
