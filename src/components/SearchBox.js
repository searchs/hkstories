import React from 'react';

const SearchBox = ({ handleChange }) => {
  return (
    <div className='pa2 ma2 navy w-100 center'>
      <input
        type='search'
        placeholder='Search books by author or title'
        className='pa3 ba bw1 b--solid b--gray br2'
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBox;
