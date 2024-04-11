import Card from './Card';

const CardList = ({ books }) => {
  return books.map((book, idx) => {
    console.log(` BOOK DETAILS: ${JSON.stringify(book)}`);
    return (
      <Card
        key={idx}
        title={book.title}
        url={book.url}
        author={book.author}
        num_comments={book.num_comments}
        points={book.points}
      />
    );
  });
};

export default CardList;
