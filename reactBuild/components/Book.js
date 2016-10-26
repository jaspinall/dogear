import React, { PropTypes } from 'react';

const Book = (props) => {
  const { title, author, pages } = props;

  return (
    <div className="book">
      <div className="title">'Title: '{title}</div>
      <div className="author">Author:{author}</div>
      <div className="pages">Page Count:{pages}</div>
    </div>
  )
};

export default Book;
