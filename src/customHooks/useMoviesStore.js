import React, { useReducer } from 'react';

import { getMovieList } from '../services/index';


const useMoviesStore = () => {
  const token = '273b9080';
  const initialState = {
    movies: [],
    currentMovie: null,
    totalResults: 10,
  };

  function reducer(state, action) {
    switch (action.type) {
      case 'FETCH_MOVIES':
        return {
          ...state,
          ...action.payload
        };
      case 'FETCH_CURRENT_MOVIE':
        return {
          ...state,
          currentMovie: action.payload
        };
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchMovies = async (title) => {
    const { movies, totalResults } = await getMovieList(token, title);
    const payload = {
      movies: Array.isArray(movies) ? movies : [movies],
      totalResults,
    };

    dispatch({ type: 'FETCH_MOVIES', payload });
  }

  return { fetchMovies, state }
}

export default useMoviesStore;