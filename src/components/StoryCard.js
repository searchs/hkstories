import { Button, Card } from 'react-bootstrap';

// function Card({ url, title, author, num_comments, points, objectID }) {
function StoryCard({ url, title, author, num_comments, points }) {
  return (
    // <div className='fl w-20 pa2 mr2 br3 ma2 bg-near-black  white'>
    <Card bg='dark' className='p-3 rounded-4 shadow-sm'>
      <Card.Title
        variant='warning'
        style={{ textAlign: 'center', padding: '10px' }}
      >
        <a
          href={url}
          className='text-warning text-decoration-none fs-4 fw-bolder '
        >
          {title}
        </a>
      </Card.Title>

      <p className=' text-white fw-2'>Author: {author}</p>
      <p className='text-warning'>
        <span className='light-gray'>Comments Counts: {num_comments}</span>
        <br />
        <span> Points: {points} </span>
      </p>
    </Card>
  );
}

export default StoryCard;
