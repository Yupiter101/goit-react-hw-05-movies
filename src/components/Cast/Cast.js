
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CastItem } from "components/CastItem/CastItem";
import css from './Cast.module.css';
import Api from "services/moviesApi";
import { Loader } from "components/Loader/Loader";


function Cast() {

  const params = useParams();
  const [castes, setCastes] = useState([]);
  const [isLoading, setIsLoading ] = useState(false);
  const [isEmpty, setisEmpty ] = useState(false);

  
  useEffect(()=>{
    function fetchMovieCast(URL_Id, subName) {
      setIsLoading(true);
      Api.getSubDetalis(URL_Id, subName)
        .then(data => {
          if(!data.cast.length) {
            setisEmpty(true);
          }
          setCastes(data.cast);
        })
        .catch(error => console.log(error))
        .finally(()=> setIsLoading(false));
    }

    fetchMovieCast(params.movieId, 'credits');
  },[params.movieId]);



  if(isLoading) {
    return <Loader/>;
  }


  if(isEmpty) {
    return <p>Cast of this movie is empty</p>;
  }

  if(!castes.length) {
    return 
  }

  return (
    <>
      <ul className={css.CastWrap}>
        {castes.map(({character, name, profile_path, id}) => <CastItem 
            key={`cast-${id}`}
            character={character}
            name={name}
            profile_path={profile_path}
          ></CastItem>)}
      </ul>
    </>
  );
}

export default Cast;
