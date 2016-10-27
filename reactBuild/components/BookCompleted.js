import React, { PropTypes } from 'react';

const BookCompleted= (props) => {
  const { title, author, pages, genre, id, days } = props;
  const titleLabel = 'Title: ';
  const authorLabel = 'Author: ';
  const genreLabel = 'Genre: ';
  const pagesLabel = 'Page Count: ';

  return (
    <div className="book" id={id}>
      <div className="data">
        <div className="title">{titleLabel}{title}</div>
        <div className="author">{titleLabel}{author}</div>
        <div className="genre">{genreLabel}{genre}</div>
        <div className="pages">{pagesLabel}{pages}</div>
      </div>
    </div>
  )
};

export default BookCompleted;
