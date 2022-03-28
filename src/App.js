import React, { useEffect, useState } from 'react';
import './App.css';
import BookList from './components/BookList';
import SearchBox from './components/SearchBox';

const bookList = [
  {
    title: 'React',
    url: 'https://reactjs.org/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0
  },
  {
    title: 'Redux',
    url: 'https://redux.js.org/',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1
  },
  {
    title: 'Redux Revoked',
    url: 'https://reduxrevoked.js.org/',
    author: 'Dan Ajibode, Fisher Smallville',
    num_comments: 2,
    points: 4,
    objectID: 2
  },
  {
    title: 'Fashion Elastic-Components Jewel Edition',
    url: 'https://hoprice.com/',
    author: 'TJ Ajibode',
    num_comments: 23,
    points: 7,
    objectID: 3
  }
];

function App() {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  // const handleSearch = (event) => {
  //   console.log(event.target.value);
  // };

  useEffect(
    (props) => {
      setBooks(bookList);
      console.log('Books:', books);
    },
    [books]
  );

  const onHandleChange = (ev) => {
    setSearchTerm(ev.target.value);
  };

  const filteredBooks = books.filter((books) => {
    return (
      books.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      books.author.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  console.log('SearchTerm: _', searchTerm, 'Filtered Books:', filteredBooks);

  return (
    <div className='App'>
      <h2 className='orange'> Hacker Stories</h2>
      <SearchBox handleChange={onHandleChange} />
      <hr />
      <BookList books={filteredBooks} />
    </div>
  );
}

export default App;
