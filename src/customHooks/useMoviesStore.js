import React, { useReducer } from 'react';

import { getMovieList, getMovie } from '../services/index';


const useMoviesStore = () => {
  const token = '273b9080';
  const initialState = {
    movies: [],
    currentMovie: {},
    totalResults: 10,
    title: 'Batman',
  };

  function reducer(state, action) {
    switch (action.type) {
      case 'FETCH_MOVIES':
        return {
          ...state,
          ...action.payload
        };
      case 'FETCH_MOVIES_BY_PAGE': {
        const { movies, totalResults } = action.payload;

        return {
          ...state,
          movies: [...state.movies, ...movies],
          totalResults,
        };
      }
      case 'FETCH_CURRENT_MOVIE':
        return {
          ...state,
          currentMovie: action.payload
        };
      case 'SET_TITLE': {
        return {
          ...state,
          title: action.payload,
        }
      }
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchMovies = async (title, page) => {
    const { movies, totalResults } = await getMovieList(token, title, page);
    const payload = {
      movies: Array.isArray(movies) ? movies : [movies],
      totalResults,
    };

    if (page && page > 1) {
      dispatch({ type: 'FETCH_MOVIES_BY_PAGE', payload });
    } else {
      dispatch({ type: 'FETCH_MOVIES', payload });
    }
  }

  const fetchMovie = async (id) => {
    const payload = await getMovie(token, id);

    dispatch({ type: 'FETCH_CURRENT_MOVIE', payload });
  }

  const setTitle = (payload) => {
    dispatch({ type: 'SET_TITLE', payload });
  }

  return { fetchMovies, fetchMovie, setTitle, state }
}

export default useMoviesStore;