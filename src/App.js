import { useEffect, useState } from "react";

import MovieList from "./components/MovieList";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MovieListHeading from "./components/MovieListHeading";
import SearchBox from "./components/SearchBox";



function App() {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const getMovieRequest = async () => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=785556f3`;

    const response = await fetch(url);
    const responseJson = await response.json();

    setMovies(responseJson.Search);
  };
  useEffect(() => {
    getMovieRequest();
  }, [searchValue]);
  const handleSearch = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <div className="container-fluid movie-app">
      <div className="row">
        <MovieListHeading heading="Movies" />
        <SearchBox handleSearch={handleSearch} searchValue={searchValue} />
      </div>
      <div className="row">
        <MovieList movies={movies} />
      </div>
    </div>
  );
}

export default App;
