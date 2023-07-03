
import { useState, useEffect } from "react";
import { useSearchParams } from 'react-router-dom';
import { SearchBar } from "components/Searchbar/Searchbar";
import Api from "services/moviesApi";
import MoviesList from "components/MoviesList/MoviesList";
import { Loader } from "components/Loader/Loader";


function Movies() {

  const [movies, setMovies] = useState([]);
  const [noMovies, setNoMovies] = useState(false);
  const [isLoading, setIsLoading ] = useState(false);
  const [queryParam, setQueryParam] = useSearchParams();
  const queryMovie = queryParam.get('query');


  useEffect(()=>{
    if(!queryMovie || queryMovie === '') {
      return
    }

    function fetchMovieSearch(URLsearch) {
      setIsLoading(true);
      setNoMovies(false);
      Api.getSearchMovies(URLsearch)
      .then(data => {
        if(!data.results.length) {
          setNoMovies(true);
          console.log('Нет фильмов с таким именем');
          return
        }
        setMovies(data.results);
      })
      .catch(error => console.log(error))
      .finally(()=> setIsLoading(false));
    }

    fetchMovieSearch(queryMovie);
  },[queryMovie]);


  function querySubmit(search) {
    if(search.trim() === '') {
      setQueryParam({});
      return
    }
    setQueryParam({query: search})

  }

  if(noMovies) {
    return (
      <>
        <SearchBar onSubmit={querySubmit}></SearchBar>
        <h2>Фильмов с таким именем не найдено :( </h2>
      </>
    );
  }


  return (
    <div>
      <SearchBar onSubmit={querySubmit}></SearchBar>
      {isLoading ? <Loader/> :  (<MoviesList 
          movies={movies} 
          isQueryName={queryMovie ? true : false}
      />)}   
    </div>
  );
}

export default Movies;


// 114472 noImg
// 125988 error
// 335977 есть view