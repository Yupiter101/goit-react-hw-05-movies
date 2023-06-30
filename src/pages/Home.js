import { useState, useEffect } from "react";
import Api from "services/moviesApi";
import MoviesList from "components/MoviesList/MoviesList";
import { Loader } from "components/Loader/Loader";


function Home() {

  const [movies, setMovies] = useState([]);
  const URLAllMovies = '/trending/all/day?';
  const [isLoading, setIsLoading ] = useState(false);



  useEffect(() => {
    fetchMovieList(URLAllMovies);
  }, []);



  function fetchMovieList(params) {
    setIsLoading(true);
    Api.getMovieData(params)
    .then(({results}) => setMovies(results))
    .catch(error => console.log(error))
    .finally(()=> setIsLoading(false));
  }


  return (
    <div>
      <h2>Trending today</h2>
      {isLoading ? <Loader/> : (
        <ul>
        {movies.map( movie => <MoviesList 
            key={`id-${movie.id}`} 
            movieId={movie.id}
            movieTitle={movie.title || movie.name}
          /> )}
      </ul>
      )}
      
    </div>
  );
}

export default Home;

// 114472 noImg
// 125988 error
// 335977 есть view