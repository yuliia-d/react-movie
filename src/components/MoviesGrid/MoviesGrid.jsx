import React from 'react';
import { useHistory } from "react-router-dom";

import './movies-grid.scss';

const MoviesGrid = ({ movies = [] }) => {
  const history = useHistory();

  const chooseMovie = (id) => {
    history.push(`/movie/${id}`);
  }

  return (
    <div className="movies-grid">
      {movies.length
        ? movies.map(movie => (
        <div
          key={movie.imdbID}
          className="movies-grid__item"
          onClick={() => chooseMovie(movie.imdbID)}
        >
          <img className="movies-grid__img" src={movie.Poster || '../../../public/logo192.png'} />
          <span className="movies-grid__title">{movie.Title}</span>
        </div>
        )
      )
        : <div className="movies-grid__default">Empty movie list</div>
      }
    </div>
  )
}

export default MoviesGrid;