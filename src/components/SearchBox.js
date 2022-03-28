import React from 'react';

const SearchBox = ({ handleChange }) => {
  return (
    <div className='pa2 ma2 light-blue'>
      <input
        type='search'
        placeholder='Search books'
        className='pa3 ba bw1 b--solid b--gray br2'
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBox;
