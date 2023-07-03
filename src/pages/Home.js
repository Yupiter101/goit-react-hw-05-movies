import { useState, useEffect } from "react";
import Api from "services/moviesApi";
import MoviesList from "components/MoviesList/MoviesList";
import { Loader } from "components/Loader/Loader";


function Home() {

  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading ] = useState(false);

  useEffect(() => {
    function fetchMovieList() {
      setIsLoading(true);
      Api.getAllMovies()
      .then(({results}) => setMovies(results))
      .catch(error => console.log(error))
      .finally(()=> setIsLoading(false));
    }
    
    fetchMovieList();
  }, []);


  return (
    <div>
      <h2>Trending today</h2>
      {isLoading ? <Loader/> : (<MoviesList
          movies={movies}
          isQueryName={false}
        />)}
    </div>
  );
}

export default Home;

// 114472 noImg
// 125988 error
// 335977 есть view