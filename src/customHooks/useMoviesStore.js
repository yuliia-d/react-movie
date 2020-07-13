import React, { useReducer } from 'react';

import { getMovieList } from '../services/index';


const useMoviesStore = () => {
  const token = '273b9080';
  const initialState = {
    movies: [],
    currentMovie: null,
  };

  function reducer(state, action) {
    switch (action.type) {
      case 'FETCH_MOVIES':
        return { movies: [...action.payload] };
      case 'FETCH_CURRENT_MOVIE':
        return { currentMovie: action.payload };
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchMovies = async (title) => {
    const data = await getMovieList(token, title);
    const payload = Array.isArray(data) ? data : [data];

    dispatch({ type: 'FETCH_MOVIES', payload });
  }

  return { fetchMovies, state }
}

export default useMoviesStore;