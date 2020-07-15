import React from 'react';

import Filter from '../../components/Filter/Filter';
import MoviesGrid from "../../components/MoviesGrid/MoviesGrid";
import './list-movies.scss';

const ListMovies = ({
  fetchMovies,
  fetchMovie,
  setTitle,
  setPage,
  state: { movies, totalResults, title, page, errorMessage },
}) => {
  const lastPage = Math.ceil(totalResults / 10);

  const onChangeMovieName = (value) => {
    setPage(1);
    setTitle(value);
  }

  const fetchMovieListByPage = () => {
    setPage(page + 1);
    fetchMovies(title, page + 1);
  }

  return (
    <div className="list-movies">
      <h1 className="list-movies__header">Movies list</h1>
      <Filter
        onChangeMovieName={onChangeMovieName}
        fetchMovies={fetchMovies}
        value={title}
      />
      {errorMessage
        ? <div className="list-movies__error">{errorMessage}</div>
        : <MoviesGrid
            movies={movies}
            fetchMovie={fetchMovie}
          />
      }
      <div className="list-movies__footer">
        {!errorMessage && lastPage > page
          && <button className="list-movies__button" onClick={fetchMovieListByPage}>Load more</button>
        }
      </div>
    </div>
  )
}

export default ListMovies;