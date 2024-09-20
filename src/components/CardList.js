import Card from './StoryCard';
import { Col, Row } from 'react-bootstrap';

const CardList = ({ books }) => {
  return (
    <Row className='p-5' md={4} lg={5}>
      {books.map((book, idx) => {
        console.log(` BOOK DETAILS: ${JSON.stringify(book)}`);
        return (
          <Col key={idx} md={6} className='mb-4'>
            <Card
              title={book.title}
              url={book.url}
              author={book.author}
              num_comments={book.num_comments}
              points={book.points}
            />
          </Col>
        );
      })}
    </Row>
  );
};

export default CardList;
