
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CastItem } from "components/CastItem/CastItem";
import css from './Cast.module.css';


// movie/${id}/credits
// const baseURL  = 'https://api.themoviedb.org/3/movie/75780/credits?api_key=7e2311f4f0ec2e3fb8119bae191edcda'

function Cast() {

  const baseURL  = 'https://api.themoviedb.org/3';
  const API_KEY = '?api_key=7e2311f4f0ec2e3fb8119bae191edcda';
  const params = useParams();
  const URLCast = baseURL +'/movie/'+ params.movieId + '/credits' + API_KEY;
 

  const [castes, setCastes] = useState([])

  console.log(castes);



  useEffect(()=>{
    console.log(444);
    fetch(URLCast)
      .then(resp => resp.json())
      .then(data => {
        setCastes(data.cast);
      })
      .catch(error => console.log(error));
  },[URLCast]);


  if(!castes.length) {
    return <p>Cast of this movie is empty</p>;
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


// character
// : 
// "Seiya"
// credit_id
// : 
// "5907403b92514169d803029b"
// gender
// : 
// 2
// id
// : 
// 1566805
// known_for_department
// : 
// "Acting"
// name
// : 
// "Mackenyu"
// order
// : 
// 0
// original_name
// : 
// "Mackenyu"
// popularity
// : 
// 18.583
// profile_path
// : 
// "/amnbjSvI19ZfxkZNj8WOa9tr7yu.jpg"