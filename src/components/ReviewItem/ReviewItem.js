import PropTypes from 'prop-types';


export function ReviewItem({ author, content }) {

  return (
    <>
      <li>
        <h3>Author: {author}</h3>
        <p>{content}</p>
      </li>
    </>
  );

}

// import PropTypes from 'prop-types';
ReviewItem.propType = {
  author: PropTypes.string,
  content: PropTypes.string
};