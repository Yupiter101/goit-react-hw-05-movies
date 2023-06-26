
import { Routes, Route } from "react-router-dom";

import Header from "./Header/Header";
import Home from "pages/Home";
import Movies from "pages/Movies";


export const App = () => {

  
  return (
    <div>
      <Header></Header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
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