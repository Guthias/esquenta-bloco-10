import React, { Component } from 'react'
import { movieList } from '../data/movies'
import MovieCard from './MovieCard'

export default class Catalog extends Component {
  render() {
    return (
      <div className="catalog-area">
        {
          movieList.map(({ image, movieName, releaseYear }) => (
            <MovieCard key={ movieName } image={ image } movieName={ movieName } releaseYear={ releaseYear } />
          ))
        }
      </div>
    )
  }
}
