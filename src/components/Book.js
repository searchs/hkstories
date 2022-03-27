import React from 'react';

function Book({ title, url, author, comments_count, points }) {
  return (
    <div className='Book bg-dark-blue silver'>
      <span>
        <a href={url} className='link yellow uppercase'>
          Book Title: {title}{' '}
        </a>
      </span>
      <p>
        <span>Author: {author}</span>
        <span>
          {' '}
          <br />
          Comments Counts: {comments_count}{' '}
        </span>
        <span> Points: {points} </span>
      </p>
    </div>
  );
}

export default Book;
