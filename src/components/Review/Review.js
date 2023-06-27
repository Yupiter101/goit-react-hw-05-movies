
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ReviewItem } from "components/ReviewItem/ReviewItem";


// movie/${id}/reviews
// const baseURL  = 'https://api.themoviedb.org/3/movie/75780/reviews?api_key=7e2311f4f0ec2e3fb8119bae191edcda';
// const baseURL  = 'https://api.themoviedb.org/3/movie/75780?api_key=7e2311f4f0ec2e3fb8119bae191edcda';



function Review() {

  const baseURL  = 'https://api.themoviedb.org/3';
  const API_KEY = '?api_key=7e2311f4f0ec2e3fb8119bae191edcda';

  const params = useParams();
  const URLView = baseURL +'/movie/'+ params.movieId + '/reviews' + API_KEY;
  // const URLView = baseURL +'/movie/'+ 75780 + 'reviews' + API_KEY;


  const [reviews, setReviews] = useState([])

  console.log(reviews);



  useEffect(()=>{
    console.log(999);
    fetch(URLView)
      .then(resp => resp.json())
      .then(view => {
        setReviews(view.results);
        // console.log(view);
      })
      .catch(error => console.log(error));
  },[URLView]);


  if(!reviews.length) {
    return <p>We do not have any revews for this movie</p>;
  }

  return (
    <>
      <ul>
        {reviews.map(({author, content}, idx) => <ReviewItem 
            key={`view-${idx}`}
            author={author}
            content={content}
          ></ReviewItem>)}
      </ul>
    </>
  );
}

export default Review;