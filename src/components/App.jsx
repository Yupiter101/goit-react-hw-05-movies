// </React.StrictMode> - false!!!!

// import css from "../components/Header/Header.module.css";
import { Routes, Route } from "react-router-dom";

// import Header from "./Header/Header";
import Home from "pages/Home";
import Movies from "pages/Movies";
import MovieDetalis from "pages/MovieDetalis";
import Layout from "./Layout/Layout";
import { NotFaund } from "pages/NotFaund";
import Cast from "./Cast/Cast";
import Review from "./Review/Review";


export const App = () => {

  
  return (
    <div className="main-container">
     
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />

          <Route path="movies/:movieId" element={<MovieDetalis />}>
            <Route path="cast" element={<Cast></Cast>}/>
            <Route path="review" element={<Review></Review>}/>
          </Route>

          <Route path="*" element={<NotFaund />} />
        </Route>
      </Routes>
    </div>
  );
};



//https://www.themoviedb.org/login
//Yupiter101
//lp****1!
//shv08@.......
//Ключ API: 7e2311f4f0ec2e3fb8119bae191edcda
//Токен доступу для читання API:
// eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZTIzMTFmNGYwZWMyZTNmYjgxMTliYWUxOTFlZGNkYSIsInN1YiI6IjY0OTk1NjVjYjM0NDA5MDBmZmVkMmI5OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uc4Bc1HtCJkDX-2TNF5nnn454p4tYRnOB1M62U-25kk

// Here's an example API request:
// https://api.themoviedb.org/3/movie/550?api_key=7e2311f4f0ec2e3fb8119bae191edcda