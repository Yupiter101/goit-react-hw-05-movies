import PropTypes from 'prop-types';
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import css from "./MoviesList.module.css";


function MoviesList({ movies, isQueryName }) {
  const location = useLocation();
  return (
    <>
      <ul>
         {movies.map( movie => <li key={`id-${movie.id}`} className={css.MovieListItem}>
          <Link 
            to={isQueryName ? `${movie.id}` : `movies/${movie.id}`} 
            state={{ from: location }}
            className={css.MovieListLink}
          >
            {movie.title || movie.name}</Link>
         </li> 
         )}
      </ul>
    </>
  );
}





export default MoviesList;

MoviesList.propType = {
    isQueryName: PropTypes.bool,
    movies: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string,
      title: PropTypes.string,
    }).isRequired,
  ).isRequired,
};