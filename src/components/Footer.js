function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div className='w-100 pa3 mt-8 bg-yellow tracked navy fixed left-0 bottom-0 right-0'>
      <p>MakeNews - Tech Cards Inc. &copy; {currentYear} </p>
    </div>
  );
}

export default Footer;
