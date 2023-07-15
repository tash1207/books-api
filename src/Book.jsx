import React from 'react';

const Book = ({ book }) => {
  return (
    <div className="book">
      <img src={book.image ? book.image : 'https://via.placeholder.com/128'}></img>
      <div>
        <div className="bookTitle">{book.title}</div>
        <div className="bookAuthor">{book.author}</div>
        <div className="bookDate">Published: {book.publishedDate}</div>
      </div>
    </div>
  );
}

export default Book;
