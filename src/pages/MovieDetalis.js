import { Link, Outlet, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import css from "./MovieDet.module.css";




function MovieDetalis() {

  // movie/${id}
  const baseURL  = 'https://api.themoviedb.org/3';
  const API_KEY = '?api_key=7e2311f4f0ec2e3fb8119bae191edcda';
  // const baseURL  = 'https://api.themoviedb.org/3/movie/75780?api_key=7e2311f4f0ec2e3fb8119bae191edcda';
  const baseURLImg = 'https://image.tmdb.org/t/p/w300/';
  
  const params = useParams();
  const URL = baseURL+"/movie/"+ params.movieId + API_KEY;
  


  const [movieInfo, setMovieInfo] = useState(null);
  console.log(movieInfo);
 

  useEffect(() => {
    fetch(URL)
      .then(response => response.json())
      .then(data => {
        // console.log(data);
        setMovieInfo(data)
        // console.log(movieInfo);
      })
      .catch(error => console.log(error));
  }, [URL])


  if(!movieInfo) {
    return
  }

  return (
    <div>
      <button type="button"><Link to="/">go back</Link></button>
      
      <div className={css.DetalisWrap}>

          <div className={css.ImgWrap}>
            <img src={`${baseURLImg}${movieInfo.poster_path}`} alt={movieInfo.title || movieInfo.name} />
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
      <Outlet />
    </div>
  );
}

export default MovieDetalis;