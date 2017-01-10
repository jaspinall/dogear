import React from 'react';

const BookCompleted = (props) => {
  const { title, author, image, pages, genre, id, days } = props;
  const titleLabel = 'Title: ';
  const authorLabel = 'Author: ';
  const genreLabel = 'Genre: ';
  const pagesLabel = 'Page Count: ';

  return (
    <div className="book" id={id}>
      <div className="bookImg"><img src={image}></img></div>
      <div className="data">
        <div className="title">{titleLabel}{title}</div>
        <div className="author">{authorLabel}{author}</div>
        <div className="genre">{genreLabel}{genre}</div>
        <div className="pages">{pagesLabel}{pages}</div>
      </div>
    </div>
  );
};

export default BookCompleted;
