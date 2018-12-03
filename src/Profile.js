import React, { Component } from 'react'
import content from './content.json'
import { Link } from 'react-router-dom'

class Profile extends Component {
  reformatReleaseDate = () => {
    let movieId = parseInt(this.props.match.params.id)
    let movie = content.results.find(film => film.id === movieId)
    let splitDate = movie.release_date.split('-')
    let month = splitDate[1]
    let day = splitDate[2]
    let year = splitDate[0]
    return `${month}-${day}-${year}`
  }

  render() {
    let movieId = parseInt(this.props.match.params.id)
    let movie = content.results.find(film => film.id === movieId)

    return (
      <div className="profile">
        <h2>{movie.title}</h2>
        <img
          src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${movie.poster_path}`}
          alt={movie.title}
        />
        <p>Release date: {this.reformatReleaseDate()}</p>
        <p>{movie.overview}</p>
        <Link to="/" className="back">
          Back to Films
        </Link>
      </div>
    )
  }
}

export default Profile
