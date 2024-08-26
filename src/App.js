import React from 'react';
import Search from './components/Search';
import MoviesList from './components/MoviesList';

function App() {
  return ( 
    <div className="App">
      <h1>Movies search</h1>
      <Search />
      <MoviesList/>
      <MoviesList />

    </div>
  );
}

export default App;
