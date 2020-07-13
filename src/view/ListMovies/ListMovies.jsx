import React from 'react';

import Filter from '../../components/Filter/Filter';
import MoviesGrid from "../../components/MoviesGrid/MoviesGrid";
import './list-movies.scss';

const ListMovies = ({ fetchMovies, state: { movies } }) => {
  return (
    <div className="list-movies">
      <h1 className="list-movies__header">Movies list</h1>
      <Filter fetchMovies={fetchMovies} />
      <MoviesGrid movies={movies} />
    </div>
  )
}

export default ListMovies;