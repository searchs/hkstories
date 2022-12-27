import React from 'react';

function Card({ url, title, author, num_comments, points }) {
  return (
    // <div className='fl w-20 pa2 mr2 br3 ma2 bg-near-black  white'>
    <div className='fl w-20 pa2 mr2 br3 ma2 bg-near-black  white tl'>
      <h3>
        <a href={url} className='link yellow fw4'>
          {title}
        </a>
      </h3>
      <p className='fw-2'>Author: {author}</p>
      <p>
        <span className='i light-gray'>Comments Counts: {num_comments}</span>
        <br />
        <span> Points: {points} </span>
      </p>
    </div>
  );
}

export default Card;
