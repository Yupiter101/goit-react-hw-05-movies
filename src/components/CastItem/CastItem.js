

export function CastItem({character, name, profile_path}) {

  const baseURLImgCast = 'https://image.tmdb.org/t/p/w200/';
  const photo = profile_path ? `${baseURLImgCast}${profile_path}` : '#' ;

  return (
    <>
      <li>
        <div style={{ width: 200, height: 300 }}>
          <img src={photo} alt={name}/>
        </div>
          
        <h3>{name}</h3>
        <p style={{ width: 200 }}>{character}</p>
      </li>
    </>
  );

}