


export function ReviewItem({author, content, idx}) {

  return (
    <>
      <li>
        <h3>Author: {author}</h3>
        <p>{content}</p>
      </li>
    </>
  );

}