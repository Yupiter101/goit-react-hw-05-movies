
const baseURL  = 'https://api.themoviedb.org/3';
const API_KEY = 'api_key=7e2311f4f0ec2e3fb8119bae191edcda';


function getAllMovies() {
  const URLAllMovies = '/trending/all/day?';
  const URL = baseURL + URLAllMovies + API_KEY;
  return fetch(URL).then(response => {
    if(!response.ok) {
      throw new Error('Поймали ошибку API');
    }
    return response.json();
  });
}


function getMovieDetalis(movieId) {
  const URL = `${baseURL}/movie/${movieId}?${API_KEY}`;
  return fetch(URL).then(response => {
    if(!response.ok) {
      throw new Error('Поймали ошибку API');
    }
    return response.json();
  });
}

function getSearchMovies(searchName) {
  const URL = `${baseURL}/search/movie?query=${searchName}&${API_KEY}`;
  return fetch(URL).then(response => {
    if(!response.ok) {
      throw new Error('Поймали ошибку API');
    }
    return response.json();
  });
}

function getSubDetalis(moveId, subName) {
  const URL = `${baseURL}/movie/${moveId}/${subName}?${API_KEY}`;
  return fetch(URL).then(response => {
    if(!response.ok) {
      throw new Error('Поймали ошибку API');
    }
    return response.json();
  });
}


const Api = {
  // getMovieData,
  getAllMovies,
  getMovieDetalis,
  getSearchMovies,
  getSubDetalis,
};

export default Api;







//https://www.themoviedb.org/login
//Yupiter101
//lp****1!
//shv08@.......
//Ключ API: 7e2311f4f0ec2e3fb8119bae191edcda
//Токен доступу для читання API:
// eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZTIzMTFmNGYwZWMyZTNmYjgxMTliYWUxOTFlZGNkYSIsInN1YiI6IjY0OTk1NjVjYjM0NDA5MDBmZmVkMmI5OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uc4Bc1HtCJkDX-2TNF5nnn454p4tYRnOB1M62U-25kk

// Here's an example API request:
// https://api.themoviedb.org/3/movie/550?api_key=7e2311f4f0ec2e3fb8119bae191edcda

// const URLAllMovies = '/trending/all/day?';
// const URLMovieDetali = '/movie/' + params.movieId + '?';
// const URLMovieCast = '/movie/'+ params.movieId + '/credits?';
// const URLMovieReview = '/movie/'+ params.movieId + '/reviews?';
// const URLMovieSearch = '/search/movie?query=Jack+Reacher&'

// List all
// URL = 'https://api.themoviedb.org/3 /trending/all/day?   api_key=7e2311f4f0ec2e3fb8119bae191edcda';
// movie/${id}
// URL = 'https://api.themoviedb.org/3 /movie/75780?   api_key=7e2311f4f0ec2e3fb8119bae191edcda';
// movie/${id}/credits
// URL = 'https://api.themoviedb.org/3 /movie/75780/credits?   api_key=7e2311f4f0ec2e3fb8119bae191edcda'
// movie/${id}/reviews
// URL = 'https://api.themoviedb.org/3 /movie/75780/reviews?   api_key=7e2311f4f0ec2e3fb8119bae191edcda';
// Search
// URL = 'https://api.themoviedb.org/3 /search/movie?query=Jack+Reacher&   api_key=7e2311f4f0ec2e3fb8119bae191edcda';

