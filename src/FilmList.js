import React, { Component } from 'react'
import content from './content.json'

class FilmList extends Component {
  render() {
    let movieObjects = content.results
    return (
      <main className="movies-area">
        {movieObjects.map((movieObject, index) => {
          return (
            <div key={index} className="film">
              <img
                src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${movieObject.poster_path}`}
                alt="Movie Title"
              />
              <h3>{movieObject.title}</h3>
            </div>
          )
        })}
      </main>
    )
  }
}

export default FilmList
