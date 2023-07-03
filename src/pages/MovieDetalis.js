import { Link, Outlet, useParams, useLocation } from "react-router-dom";
import { useState, useEffect, useRef, Suspense } from "react";

import css from "./MovieDet.module.css";
import Api from "services/moviesApi";
import noPoster from '../img/no-poster.jpg';
import { Loader } from "components/Loader/Loader";
import { LoaderSerch } from "components/Loader/LoaderSearch";



function MovieDetalis() {


  const baseURLImg = 'https://image.tmdb.org/t/p/w300/';
  const params = useParams();
  const URLMovieId = params.movieId;

  const [movieInfo, setMovieInfo] = useState(null);
  const [isLoading, setIsLoading ] = useState(false);
  const [isError, setIsError ] = useState(false);

  const location = useLocation();
  const locationRef = useRef(location.state?.from ?? '/');
  


  useEffect(() => {

    function fetchMovieDetalis(movieId) {
      setIsLoading(true);
      setIsError(false);
      Api.getMovieDetalis(movieId)
        .then(data => {
          setMovieInfo(data);
        })
        .catch(error => {
          console.log(error);
          setIsError(true);
        })
        .finally(()=> setIsLoading(false));
    }

    fetchMovieDetalis(URLMovieId);
  }, [URLMovieId])

  

  // 114472 noImg
  // 125988 error
  // 335977 есть view


  if(isLoading) {
    return <Loader/>
  }

  if(isError) {
    return <h3>Нет информации по фильму с ID: {params.movieId}</h3>
  }

  if(!movieInfo) {
    return 
  }

  return (
    <div>
      <Link to={locationRef.current}>go back</Link>
      <div className={css.DetalisWrap}>
          <div className={css.ImgWrap}>
            <img 
              // src={`${baseURLImg}${movieInfo.poster_path}`} 
              src={movieInfo.poster_path ? `${baseURLImg}${movieInfo.poster_path}` : noPoster} 
              alt={movieInfo.title || movieInfo.name} 
            />
          </div>
          
          <div className={css.DescrMovieWrap}>
              <h1>{movieInfo.title || movieInfo.name}</h1>
              <h4>User Score: {Math.round(movieInfo.vote_average * 10)} %</h4>
              <h2>Overview </h2>
              <p>{movieInfo.overview}</p>
              <h3>Genres</h3>
              <div>
                {movieInfo.genres.map((genr, idx) => <span key={`${movieInfo.id}-${idx}`}>{genr.name} </span>)}
              </div>
          </div>
      </div>
      
      <h4>Addition information</h4>
  
      <ul>
        <li><Link to="cast">Cast</Link></li>
        <li><Link to="review">Review</Link></li>
      </ul>
      <Suspense fallback={<LoaderSerch/>}>
        <Outlet />
      </Suspense>
      
    </div>
  );
}

export default MovieDetalis;