import React from 'react';
import Book from './Book';

const BookList = ({ books }) => {
  return books.map((book, idx) => {
    return (
      <Book
        key={idx}
        title={books[idx].title}
        url={books[idx].url}
        author={books[idx].author}
        comments_count={books[idx].comments}
        points={books[idx].points}
      />
    );
  });
};

export default BookList;
