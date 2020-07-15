import React, { useState } from 'react';
import './filter.scss';


const Filter = ({ fetchMovies, value, onChangeMovieName }) => {
  const findMovie = () => {
    fetchMovies(value);
  }

  return (
    <div className="filter">
      <input
        className="filter__input"
        type="text"
        value={value}
        onChange={({ target: { value } }) => onChangeMovieName(value)}
      />
      <button
        className="filter__button"
        onClick={findMovie}
      >
        Search
      </button>
    </div>
  )
}

export default Filter;