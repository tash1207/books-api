import React from 'react';

const Book = ({ book }) => {
  return (
    <div className="book">
      <img src={book.image ? book.image : 'https://via.placeholder.com/200'}></img>
      <div>
        <h3>{book.title}</h3>
        <span>{book.author}</span>
      </div>
    </div>
  );
}

export default Book;
