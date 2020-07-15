const useMoviesInitialStateReducer = () => {
  const initialState = {
    movies: [],
    currentMovie: {},
    totalResults: 0,
    title: 'Batman',
    page: 1,
    errorMessage: null,
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
      case 'SET_PAGE': {
        return {
          ...state,
          page: action.payload,
        }
      }
      case 'SET_ERROR': {
        return {
          ...state,
          errorMessage: action.payload,
        }
      }
      default:
        return state;
    }
  }

  return {initialState, reducer}

}

export default useMoviesInitialStateReducer;