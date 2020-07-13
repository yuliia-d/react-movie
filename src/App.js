import React from 'react';
import logo from './logo.svg';
import ListMovies from './view/ListMovies/ListMovies';
import './App.css';

import useMoviesStore from "./customHooks/useMoviesStore";

function App() {
  const { fetchMovies, fetchMovie, state } = useMoviesStore();

  return (
    <div className="App">
      <ListMovies
        fetchMovies={fetchMovies}
        fetchMovie={fetchMovie}
        state={state}
      />
    </div>
  );
}

export default App;
