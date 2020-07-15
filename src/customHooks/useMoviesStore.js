import React, { useReducer } from "react";

import { getMovieList, getMovie } from "../services/index";
import useMoviesInitialStateReducer from "./useMoviesInitialStateReduser";

const useMoviesStore = () => {
  const token = '273b9080';
  const { reducer, initialState } = useMoviesInitialStateReducer();
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchMovies = async (title, page = 1) => {
    try {
      const { movies, totalResults, Error } = await getMovieList(token, title, page);

      if (Error) {
        dispatch({ type: 'SET_ERROR', payload: Error });
        dispatch({
          type: 'FETCH_MOVIES',
          payload: { movies: [], totalResults: 0 }
        });

        return;
      }

      dispatch({ type: 'SET_ERROR', payload: null });

      const payload = {
        movies: Array.isArray(movies) ? movies : [movies],
        totalResults,
      };

      if (page && page > 1) {
        dispatch({ type: 'FETCH_MOVIES_BY_PAGE', payload });
      } else {
        dispatch({ type: 'FETCH_MOVIES', payload });
      }
    } catch (e) {
      console.error(e);
    }
  }

  const fetchMovie = async (id) => {
    try {
      const payload = await getMovie(token, id);

      dispatch({ type: 'FETCH_CURRENT_MOVIE', payload });
    } catch (e) {
      console.error(e);
    }
  }

  const setTitle = (payload) => {
    dispatch({ type: 'SET_TITLE', payload });
  }

  const setPage = (payload) => {
    dispatch({ type: 'SET_PAGE', payload });
  }

  return { fetchMovies, fetchMovie, setTitle, setPage, state }
}

export default useMoviesStore;