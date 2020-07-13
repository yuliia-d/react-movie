import axios from 'axios';

export async function getMovieList(token, title, page = 1) {
  const result = await axios.get('http://www.omdbapi.com/', {
    params: {
      s: title,
      apikey: token,
      page,
    },
  });

  return result.data.Search;
}
