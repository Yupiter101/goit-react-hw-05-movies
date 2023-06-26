import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

// const arrs = ['mov-1', 'mov-2', 'mov-3', 'mov-4', 'mov-5', 'mov-6'];
// List all
const baseURL  = 'https://api.themoviedb.org/3/trending/all/day?api_key=7e2311f4f0ec2e3fb8119bae191edcda';


function Home() {
  const [movies, setMovies] = useState([]);
  // const [test, setTest] = useState(0);

  const isFirstRender = useRef(true);
  
  useEffect(() => {
    if(isFirstRender.current) {
      isFirstRender.current = false;
      console.log('Пропуск 1');
      return
    }
    
    fetch(baseURL)
      .then(response => response.json() )
      .then(({results}) => {
        console.log(results);
        setMovies(results);
      })
      .catch(error => console.log(error))

  }, []);


  return (
    <div>
      <h2>Trending today</h2>
      <ul>
        {movies.map( movie => <li key={`id-${movie.id}`}><Link>{movie.title || movie.name}</Link></li> )}
      </ul>
    </div>
  );
}

export default Home;



// const myURL = 'https://api.themoviedb.org/3/movie/550?api_key=7e2311f4f0ec2e3fb8119bae191edcda';
// const baseURL  = 'https://api.themoviedb.org/3/search/movie?query=Jack+Reacher&api_key=7e2311f4f0ec2e3fb8119bae191edcda';
// const baseURL  = 'https://api.themoviedb.org/3/  search/movie?query=Jack+Reacher&api_key=7e2311f4f0ec2e3fb8119bae191edcda';

// List all
// const baseURL  = 'https://api.themoviedb.org/3/trending/all/day?api_key=7e2311f4f0ec2e3fb8119bae191edcda';

// Search
// const baseURL  = 'https://api.themoviedb.org/3/search/movie?query=Jack+Reacher&api_key=7e2311f4f0ec2e3fb8119bae191edcda';

// movie/${id}
// const baseURL  = 'https://api.themoviedb.org/3/movie/75780?api_key=7e2311f4f0ec2e3fb8119bae191edcda';

// movie/${id}/credits
// const baseURL  = 'https://api.themoviedb.org/3/movie/75780/credits?api_key=7e2311f4f0ec2e3fb8119bae191edcda';

// movie/${id}/reviews
// const baseURL  = 'https://api.themoviedb.org/3/movie/75780/reviews?api_key=7e2311f4f0ec2e3fb8119bae191edcda';

// poster_path: "/uQBbjrLVsUibWxNDGA4Czzo8lwz.jpg"
// https://image.tmdb.org/t/p/w300/qtafXiYDUMKxzsssU41qWey5oiT.jpg
// https://image.tmdb.org/t/p/w300/uQBbjrLVsUibWxNDGA4Czzo8lwz.jpg

// https://api.themoviedb.org/3/
// trending/all/day?
// `search/movie?query=${query}`
// `movie/${id}?`
// `movie/${id}/credits?`
// `movie/${id}/reviews?`