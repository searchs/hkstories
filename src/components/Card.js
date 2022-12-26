import React from 'react';

function Card({ url, title, author, num_comments, points }) {
  return (
    <div className='Book bg-dark-blue white center'>
      <h3>
        <a href={url} className='link yellow uppercase'>
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
