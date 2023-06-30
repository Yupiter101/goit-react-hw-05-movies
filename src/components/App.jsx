// </React.StrictMode> - false!!!!
import { lazy } from "react";
import { Routes, Route } from "react-router-dom";

// import Home from "pages/Home";
// import Movies from "pages/Movies";
// import MovieDetalis from "pages/MovieDetalis";
import Layout from "./Layout/Layout";
import { NotFaund } from "pages/NotFaund";

// import Cast from "./Cast/Cast";
// import Review from "./Review/Review";

const Home = lazy(()=> import('../pages/Home'));
const Movies = lazy(()=> import('../pages/Movies'));
const MovieDetalis = lazy(()=> import('../pages/MovieDetalis'));
const Cast = lazy(()=> import('../components/Cast/Cast'));
const Review = lazy(()=> import('../components/Review/Review'));



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
