import React, { useState } from 'react';

import Filter from '../../components/Filter/Filter';
import MoviesGrid from "../../components/MoviesGrid/MoviesGrid";
import './list-movies.scss';

const ListMovies = ({ fetchMovies, fetchMovie, state: { movies, totalResults } }) => {
  const lastPage = Math.ceil(totalResults / 10);
  const [page, setPage] = useState(1);
  const [value, setValue] = useState('');

  const onChangeMovieName = (value) => {
    setValue(value);
  }

  const fetchMovieListByPage = () => {
    setPage(page + 1);
    fetchMovies(value, page + 1);
  }

  return (
    <div className="list-movies">
      <h1 className="list-movies__header">Movies list</h1>
      <Filter
        onChangeMovieName={onChangeMovieName}
        fetchMovies={fetchMovies}
        value={value}
      />
      <MoviesGrid
        movies={movies}
        fetchMovie={fetchMovie}
      />
      <div className="list-movies__footer">
        {lastPage > page
          && <button className="list-movies__button" onClick={fetchMovieListByPage}>Load more</button>
        }
      </div>
    </div>
  )
}

export default ListMovies;