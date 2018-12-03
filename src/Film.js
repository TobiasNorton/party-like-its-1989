import React, { Component } from 'react'
import content from './content.json'

class Film extends Component {
  render() {
    let movieObjects = content.results
    return (
      <>
        {movieObjects.map((movieObject, index) => {
          return (
            <div key={index} className="movie">
              {console.log(movieObject.poster_path)}
              <img
                src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${movieObject.poster_path}`}
                alt="Movie Title"
              />
              <h3>{movieObject.title}</h3>
            </div>
          )
        })}
      </>
    )
  }
}

export default Film
