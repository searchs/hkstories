import React from 'react';
import Card from './Card';

const CardList = ({ books }) => {
  return books.map((book, idx) => {
    return (
      <Card
        key={idx}
        title={book.title}
        url={books[idx].url}
        author={books[idx].author}
        num_comments={books[idx].num_comments}
        points={books[idx].points}
      />
    );
  });
};

export default CardList;
