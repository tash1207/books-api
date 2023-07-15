import React from 'react';

const Book = ({ book }) => {
  return (
    <div className="book" title={book.title}>
      <img src={book.image ? book.image : 'https://via.placeholder.com/128'}></img>
      <div>
        <div className="bookTitle">{book.title}</div>
        <div className="bookAuthor">{book.author}</div>
        {book.publishedDate ? (
          <div className="bookDate">Published: {book.publishedDate}</div>
          ) : ""}
      </div>
    </div>
  );
}

export default Book;
