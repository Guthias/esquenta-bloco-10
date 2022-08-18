import React, { Component } from 'react'

export default class MovieCard extends Component {
  render() {
    const { image, movieName, releaseYear } = this.props;

    return (
      <div className="movie-card">
        <div className="poster-area">
          <img className="poster" src={ image } alt="" />
        </div>
        
        <div className="movie-details">
          <h2>{ movieName }</h2>
          <span>{ releaseYear }</span>
        </div>
      </div>
    )
  }
}
