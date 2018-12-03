import React, { Component } from 'react'
import content from './content.json'
import { Link } from 'react-router-dom'

class FilmList extends Component {
  render() {
    let movieObjects = content.results
    return (
      <>
        <h2>Movies from 1989 that we'll never forget!</h2>
        <main className="movies-area">
          {movieObjects.map((movieObject, index) => {
            return (
              <div key={index} className="film">
                <Link to={`/${movieObject.id}`}>
                  <img
                    src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${
                      movieObject.poster_path
                    }`}
                    alt={movieObject.title}
                  />
                </Link>

                <h3>{movieObject.title}</h3>
              </div>
            )
          })}
        </main>
      </>
    )
  }
}

export default FilmList
