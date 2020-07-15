import React, { useState } from 'react';
import './filter.scss';


const Filter = ({ fetchMovies, value, onChangeMovieName }) => {
  const [title, setTitle] = useState(value);
  const findMovie = () => {
    fetchMovies(title);
    onChangeMovieName(title);
  }

  const keyPress = ({ charCode }) => {
    if(charCode === 13){
      findMovie();
    }
  }

  return (
    <div className="filter">
      <input
        className="filter__input"
        type="text"
        value={title}
        onChange={({ target: { value } }) => setTitle(value)}
        onKeyPress={keyPress}
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