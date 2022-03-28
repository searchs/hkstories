import React from 'react';

function Book(props) {
  return (
    <div className='Book bg-dark-blue silver'>
      <span>
        <a href={props.url} className='link yellow uppercase'>
          Book Title: {props.title}{' '}
        </a>
      </span>
      <p>
        <span>Author: {props.author}</span>
        <span>
          <br />
          Comments Counts: {props.comments_count}
        </span>
        <span> Points: {props.points} </span>
      </p>
    </div>
  );
}

export default Book;
