const SearchBox = ({ handleChange }) => {
  return (
    <div className='pa2 ma2 navy w-100 center'>
      <label htmlFor='search' className='fs-3 text-primary'>
        Search:&nbsp;
      </label>
      <input
        id='search'
        type='search'
        placeholder='Search books by author or title'
        className='pa3 ba bw1 b--solid b--navy br2'
        onChange={handleChange}
      />
      <hr />
    </div>
  );
};

export default SearchBox;
