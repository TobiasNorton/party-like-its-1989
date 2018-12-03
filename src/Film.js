import React, { Component } from 'react'

class Film extends Component {
  render() {
    return (
      <div className="movie">
        <h3>Movie Title</h3>
        <p>1989-05-24</p>
        <img src="#" alt="Movie Title" />
        <p>Overview</p>
      </div>
    )
  }
}

export default Film
