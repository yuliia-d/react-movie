import React, { useEffect, useMemo } from 'react';
import { useParams } from "react-router-dom";

import './movie-item.scss';

const MovieItem = ({ currentMovie, fetchMovie }) => {
  const { id } = useParams();
  const { imdbID } = currentMovie;

  useEffect(() => {
    if (id !== imdbID) {
      fetchMovie(id);
    }
  }, [imdbID, id]);

  const movieInfo = useMemo(() => {
    if (!Object.keys(currentMovie).length) {
      return [];
    }

    return [
      {
        title: 'Plot',
        value: currentMovie.Plot,
      }, {
        title: 'IMDB rating',
        value: currentMovie.imdbRating,
      }, {
        title: 'Released',
        value: currentMovie.Released,
      }, {
        title: 'Type',
        value: currentMovie.Type,
      }
    ]
  }, [imdbID, id, currentMovie])

  return(
    <div className="movie-item">
      {currentMovie && id === imdbID ?
        <div className="movie-item__block">
          <div className="movie-item__title">
            <h2>{currentMovie.Title}</h2>
          </div>
          <div className="movie-item__poster">
            <img className="movie-item__img" src={currentMovie.Poster} />
          </div>
          <div className="movie-item__data">
            {movieInfo.map((movie) => (
              <div className="movie-item__info">
                <p className="info__title">{movie.title}</p>
                <p className="info__value">{movie.value}</p>
              </div>
            ))}
          </div>
        </div>
        : <div className="movie-item__load">Loading...</div>
      }
    </div>
  )
}

export default MovieItem;