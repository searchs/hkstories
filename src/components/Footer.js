import { Row } from 'react-bootstrap';
function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <Row className='w-100 bg-warning p-5 mt-5'>
      <p className='fw-medium fs-5'>
        MarkTwo Platform - Tech Cards Inc. &copy; 2018 - {currentYear}{' '}
      </p>
    </Row>
  );
}

export default Footer;
// <Row className='w-100 pa3 mt-8 bg-yellow tracked navy fixed left-0 bottom-0 right-0'>
