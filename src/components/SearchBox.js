const SearchBox = ({ handleChange }) => {
  return (
    <div className='pa2 ma2 navy w-100 center'>
      <label htmlFor='search' className='fs-3 text-primary mx-3'>
        Search{'  '}
      </label>
      <input
        id='search'
        type='search'
        placeholder='Search books by author or title'
        className='pa3 ba bw1 w-50 b--solid b--navy br2'
        onChange={handleChange}
        autoFocus
      />
      <hr />
    </div>
  );
};

export default SearchBox;

// Data Stories via API
// https://hn.algolia.com/api/v1/search?query=cups
