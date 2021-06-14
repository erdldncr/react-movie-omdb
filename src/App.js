import { useEffect, useState } from "react";
import AddFavoruites from './components/AddFavoruites'
import MovieList from "./components/MovieList";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MovieListHeading from "./components/MovieListHeading";
import SearchBox from "./components/SearchBox";



function App() {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("star");
  const [favourites,setFavourites]=useState([])
  const getMovieRequest = async () => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=785556f3`;

    const response = await fetch(url);
    const responseJson = await response.json();

    
    responseJson.Search&&setMovies(responseJson.Search);
  };
  useEffect(() => {
    getMovieRequest();
  }, [searchValue]);
  const handleSearch = (e) => {
    setSearchValue(e.target.value);
  };
  const handleFavouritesClick=(movie)=>{
    const newFavList=[...favourites,movie]
    setFavourites(newFavList)
  }
  console.log(favourites)
  return (
    <div className="container-fluid movie-app">
      <div className="row d-flex align-items-center mt-4 mb-4">
        <MovieListHeading heading="Movies" />
        <SearchBox handleSearch={handleSearch} searchValue={searchValue} />
      </div>
      <div className="row">
        <MovieList movies={movies} handleFavouritesClick={handleFavouritesClick} favoruiteComponent={AddFavoruites} />
      </div>
      <div className="row d-flex align-items-center mt-4 mb-4">
        <MovieListHeading heading="Favorutie Movies" />
        <div className="row">
        <MovieList movies={favourites} handleFavouritesClick={handleFavouritesClick} favoruiteComponent={AddFavoruites} />
      </div>
      </div>
    </div>
  );
}

export default App;
