import React, { useEffect, useState } from 'react';
import './App.css';
import CardList from './components/CardList';
import Footer from './components/Footer';
import Header from './components/Header';
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
    title: 'Redux in Scala',
    url: 'https://redux.js.org/',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1
  },
  {
    title: 'Redux Revoked Java - Functional Prog',
    url: 'https://npmjs.com/',
    author: 'Tofarati D. Ajifada, Fisher Smallville',
    num_comments: 2,
    points: 40,
    objectID: 2
  },
  {
    title: 'Ecommerce with Elasticsearch and React',
    url: 'https://www.hoprice.com/',
    author: 'Tony Stark',
    num_comments: 23,
    points: 7,
    objectID: 3
  },
  {
    title: 'Design patterns for beginners',
    url: 'https://www.ohprice.com/',
    author: 'Peter Parker Bruno',
    num_comments: 12,
    points: 4,
    objectID: 4
  },
  {
    title: 'Ecommerce designed functionally in Scala',
    url: 'https://www.katchfashion.com/',
    author: 'Fisayo Isaacs',
    num_comments: 10,
    points: 3,
    objectID: 5
  },
  {
    title: ' Epistle to Timothy in Ruby',
    url: 'https://livenotices.com/',
    author: 'Ola Peters',
    num_comments: 10,
    points: 5,
    objectID: 6
  }
];

function App() {
  const [books, setBooks] = useState([]);

  const useSemiPersistenceState = (key, initialState) => {
    const [value, setValue] = React.useState(
      localStorage.getItem(key) || initialState
    );

    React.useEffect(() => {
      localStorage.setItem(key, value);
    }, [value, key]);

    return [value, setValue];
  };

  const [searchTerm, setSearchTerm] = useSemiPersistenceState('search', 'red');

  // useState(
  //   localStorage.getItem('search') || 'React'
  // );

  useEffect(() => {
    localStorage.setItem('search', searchTerm);
    setBooks(bookList);
  }, [searchTerm]);

  const onHandleChange = (event) => {
    setSearchTerm(event.target.value);
    localStorage.setItem('search', event.target.value);
  };

  const filteredBooks = books.filter((item) => {
    return (
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.author.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <div className='App'>
      <Header />
      <SearchBox search={searchTerm} handleChange={onHandleChange} />
      <CardList books={filteredBooks} className='center items-center pa-3' />
      <Footer />
    </div>
  );
}

export default App;
