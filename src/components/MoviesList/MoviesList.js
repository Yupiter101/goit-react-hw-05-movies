import PropTypes from 'prop-types';
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import css from "./MoviesList.module.css";


function MoviesList({ movieId, movieTitle, isQueryName }) {

  const location = useLocation();

  return (
    <>
      <li className={css.MovieListItem}>
        <Link 
          to={isQueryName ? `${movieId}` : `movies/${movieId}`} 
          state={{ from: location }}
          className={css.MovieListLink}
        >
          {movieId} {movieTitle}</Link>
      </li>
    </>
  );
}

export default MoviesList;

// import PropTypes from 'prop-types';
MoviesList.propType = {
  movieId: PropTypes.string,
  movieTitle: PropTypes.string,
  isQueryName: PropTypes.string
};