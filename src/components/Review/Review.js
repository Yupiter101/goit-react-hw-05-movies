
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ReviewItem } from "components/ReviewItem/ReviewItem";
import Api from "services/moviesApi";
import { Loader } from "components/Loader/Loader";


function Review() {

  const params = useParams();
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading ] = useState(false);
  const [isEmpty, setisEmpty ] = useState(false);


  useEffect(()=>{
    function fetchMovieReview(URL_Id, subName) {
      setIsLoading(true);
      setisEmpty(false);
      Api.getSubDetalis(URL_Id, subName)
        .then(view => {
          if(!view.results.length) {
            setisEmpty(true);
          }
          setReviews(view.results);
        })
        .catch(error => console.log(error))
        .finally(()=> setIsLoading(false));
    }

    fetchMovieReview(params.movieId, 'reviews');
  },[params.movieId]);


  

 
  if(isLoading) {
    return <Loader/>;
  }


  if(isEmpty) {
    return <p>We do not have any revews for this movie</p>;
  }

  if(!reviews.length) {
    return 
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