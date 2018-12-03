import React, { Component } from 'react'

class Profile extends Component {
  render() {
    return (
      <div className="profile">
        <h3>Indiana Jones and the Last Crusade</h3>
        <img
          src="https://image.tmdb.org/t/p/w185_and_h278_bestv2/4p1N2Qrt8j0H8xMHMHvtRxv9weZ.jpg"
          alt="Movie Title"
        />
        <p>Release Date: 1989-05-24</p>
        <p>
          When Dr. Henry Jones Sr. suddenly goes missing while pursuing the Holy Grail, eminent
          archaeologist Indiana must team up with Marcus Brody, Sallah and Elsa Schneider to follow
          in his father's footsteps and stop the Nazis from recovering the power of eternal life.
        </p>
      </div>
    )
  }
}

export default Profile
