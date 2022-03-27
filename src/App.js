import React, { useState } from 'react';
import './App.css';
import Book from './components/Book';

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
  const handleSearch = (event) => {
    console.log(event.target.value);
  };

  return (
    <div className='App'>
      <h2> Hacker Stories</h2>
      <Search onSearch={handleSearch} />
      <hr />
      <ItemList list={bookList} />
    </div>
  );
}

const Search = (props) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    console.log(searchTerm);

    props.onSearch(event);
  };

  return (
    <div>
      <label htmlFor='search'>Search:</label>
      <input type='text' id='search' onChange={handleChange} />

      <p>
        Searching for <strong>{searchTerm}</strong>
      </p>
    </div>
  );
};

const ItemList = (props) => {
  return (
    <ul>
      {props.list.map((book) => {
        return (
          <li key={book.objectID}>
            {
              <Book
                title={book.title}
                url={book.url}
                points={book.points}
                author={book.author}
                num_comments={book.num_comments}
              />
            }
          </li>
        );
      })}
    </ul>
  );
};

export default App;
