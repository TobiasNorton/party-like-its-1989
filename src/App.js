import React, { Component } from 'react'
import './App.css'
import Film from './Film'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Party Like It's 1989!</h1>
        <h3>Movies from 1989 that we'll never forget!</h3>

        <main className="movies-area">
          <Film />
          <div>
            <h3>Another Movie Title</h3>
            <p>1989-08-01</p>
            <img src="#" alt="Another Movie Title" />
            <p>Overview</p>
          </div>

          <div>
            <h3>TMNT</h3>
            <p>1989-05-24</p>
            <img src="#" alt="TMNT" />
            <p>Overview</p>
          </div>
        </main>
      </div>
    )
  }
}

export default App
