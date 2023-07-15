import React, { useEffect, useState } from 'react';

import Book from './Book.jsx'
import SearchIcon from "./search.svg";

const App = () => {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const API_KEY = "AIzaSyCvT6QJLfyGKhOu-8FNbYxdByXbq52mdTM";
  const API_URL = "https://www.googleapis.com/books/v1/volumes?key=" + API_KEY;

  const BookObject = (id, title, author, publishedDate, image) => {
    return {
      id,
      title,
      author,
      publishedDate,
      image : image || '',
    }
  }

  const searchBooks = async (title) => {
    const response = await fetch(`${API_URL}&q=${title}`);
    const data = await response.json();

    setBooks(parseReturnedItems(data.items || []));
  }

  const parseReturnedItems = (items) => {
    const parsedItems = [];
    for (const item of items) {
      const parsedBook = BookObject(
        item.id,
        item.volumeInfo.title,
        item.volumeInfo.authors ? item.volumeInfo.authors[0] : "",
        item.volumeInfo.publishedDate,
        item.volumeInfo.imageLinks?.thumbnail);
      parsedItems.push(parsedBook);
    }
    console.log(parsedItems);
    return parsedItems;
  }

  useEffect(() => {
    searchBooks('happy place');
    setSearchTerm('happy place');
  }, [])


  return (
    <div className="app">
      <h1>Books!</h1>

      <div className="search">
        <input
          placeholder="Search for books"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") searchBooks(searchTerm)
          }}
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchBooks(searchTerm)}
        />
      </div>

      {books?.length > 0
        ? (
          <div className="container">
            {books.map((book) => (
              <Book key={book.id} book={book} />
            ))}
          </div>
          ) : (
            <div className="empty">
              <h2>No books found</h2>
            </div>
          )
      }

    </div>
  );
}

export default App;
