import axios from 'axios';

export async function getMovieList(token, title, page = 1) {
  const result = await axios.get('http://www.omdbapi.com/', {
    params: {
      s: title,
      apikey: token,
      page,
    },
  });

  return {
    movies: result.data.Search,
    totalResults: result.data.totalResults,
    Error: result.data.Error,
  };
}

export async function getMovie(token, id) {
  const result = await axios.get('http://www.omdbapi.com/', {
    params: {
      i: id,
      apikey: token,
    },
  });

  return result.data;
}
