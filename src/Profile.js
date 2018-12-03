import React, { Component } from 'react'
import content from './content.json'
import { Link } from 'react-router-dom'

class Profile extends Component {
  render() {
    let movieId = parseInt(this.props.match.params.id)
    let movie = content.results.find(film => film.id === movieId)

    return (
      <div className="profile">
        <Link to="/" className="back">
          Back to Films
        </Link>
        <h2>{movie.title}</h2>
        <img
          src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${movie.poster_path}`}
          alt={movie.title}
        />
        <p>Release date: {movie.release_date}</p>
        <p>{movie.overview}</p>
      </div>
    )
  }
}

export default Profile
