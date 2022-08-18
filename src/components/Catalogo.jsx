import React from 'react';
import { movieList } from '../data/movies';
import MovieTitle from './MovieTitle';

const lis = movieList.map(({ movieName, releaseYear, image }) => {
  return (
    <li key={movieName}>
      <p>{movieName}</p>
      <p>{releaseYear}</p>
      <img src={image} alt={movieName} />
    </li>
  );
});

class Catalogo extends React.Component {
  render() {
    return <div>
      <MovieTitle />
      <ul>{lis}</ul>;
    </div>
  }
}

export default Catalogo;
