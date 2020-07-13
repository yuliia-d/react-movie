import React from 'react';
import logo from './logo.svg';
import ListMovies from './view/ListMovies/ListMovies';
import './App.css';

import useMoviesStore from "./customHooks/useMoviesStore";

function App() {
  const { fetchMovies, state } = useMoviesStore();

  return (
    <div className="App">
      <ListMovies
        fetchMovies={fetchMovies}
        state={state}
      />
    </div>
  );
}

export default App;
