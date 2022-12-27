import React from 'react';

function Card({ url, title, author, num_comments, points }) {
  return (
    <div className='outline w-25 pa3 mr2 br3 ma2 bg-black white'>
      <h3>
        <a href={url} className='link yellow fw4'>
          {title}
        </a>
      </h3>
      <h5>Author: {author}</h5>
      <p>
        <span className='i'>Comments Counts: {num_comments}</span>
        <br />
        <span> Points: {points} </span>
      </p>
    </div>
  );
}

export default Card;
