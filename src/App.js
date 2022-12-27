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
    title: 'Redux Revoked Java',
    url: 'https://reduxrevoked.js.org/',
    author: 'Dan Ajibode, Fisher Smallville',
    num_comments: 2,
    points: 4,
    objectID: 2
  },
  {
    title: 'Ecommerce search with Elasticsearch and React',
    url: 'https://hoprice.com/',
    author: 'TJ Ajibode',
    num_comments: 23,
    points: 7,
    objectID: 3
  },
  {
    title: 'Design patterns for beginners',
    url: 'https://www.ohprice.com/',
    author: 'Carlos Bruno',
    num_comments: 12,
    points: 4,
    objectID: 4
  },
  {
    title: 'Ecommerce designed functionally in Scala',
    url: 'https://www.katchfashion.com/',
    author: 'CTO  Fisayo',
    num_comments: 10,
    points: 3,
    objectID: 5
  },
  {
    title: ' Epistle to Timothy in Ruby',
    url: 'https://livenotices.com/',
    author: 'CEO  TJ',
    num_comments: 10,
    points: 5,
    objectID: 6
  }
];

function App() {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState(
    localStorage.getItem('search') || 'React'
  );

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
      <CardList
        books={filteredBooks}
        className='center pa3 flex flex-column flex-wrap-m flex-row-ns'
      />
      <Footer />
    </div>
  );
}

export default App;
