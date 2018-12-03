import React, { Component } from 'react'
import content from './content.json'

class Film extends Component {
  render() {
    return (
      <div className="film">
        <img
          src="https://image.tmdb.org/t/p/w185_and_h278_bestv2/4p1N2Qrt8j0H8xMHMHvtRxv9weZ.jpg"
          alt="Movie Title"
        />
        <h3>Indiana Jones and the Last Crusade</h3>
      </div>

      // <div key={index} className="film">
      //   <img
      //     src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${movieObject.poster_path}`}
      //     alt="Movie Title"
      //   />
      //   <h3>{movieObject.title}</h3>
      // </div>
    )
  }
}

export default Film
