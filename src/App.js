import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import ListMovies from './view/ListMovies/ListMovies';
import MovieItem from './view/MovieItem/MovieItem'
import './App.css';

import useMoviesStore from "./customHooks/useMoviesStore";

function App() {
  const { fetchMovies, fetchMovie, setTitle, state } = useMoviesStore();

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/movies" component={() =>
            <ListMovies
              fetchMovies={fetchMovies}
              fetchMovie={fetchMovie}
              setTitle={setTitle}
              state={state}
            />}
          />
          <Route path="/movie/:id" component={() =>
            <MovieItem
              currentMovie={state.currentMovie}
              fetchMovie={fetchMovie}
            />
          }/>
          <Redirect from="/" to="/movies" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
