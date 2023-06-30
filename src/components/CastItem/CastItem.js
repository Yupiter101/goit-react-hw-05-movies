import PropTypes from 'prop-types';
import noImg from '../../img/no_Img_min.png';


export function CastItem({character, name, profile_path}) {

  const baseURLImgCast = 'https://image.tmdb.org/t/p/w200/';
  const photo = profile_path ? `${baseURLImgCast}${profile_path}` : noImg ;

  const styleImg = {
    width: 200,
  };


  return (
    <>
      <li>
        <div style={styleImg}>
          <img  src={photo} alt={name}/>
        </div>
          
        <h3>{name}</h3>
        <p style={{ width: 200 }}>{character}</p>
      </li>
    </>
  );

}

CastItem.propType = {
  character: PropTypes.string,
  name: PropTypes.string,
  profile_path: PropTypes.string
};
