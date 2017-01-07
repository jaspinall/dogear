import React from 'react';

const Book = (props) => {
  const { title, author, pages, genre, id, days, markComplete} = props;
  const titleLabel = 'Title: ';
  const authorLabel = 'Author: ';
  const genreLabel = 'Genre: ';
  const pagesLabel = 'Page Count: ';
  const daysLabel = 'Days Reading: ';
  const buttonId = `button${id}`;

  return (
    <div className="book">
      <div className="data">
        <div className="title">{titleLabel}{title}</div>
        <div className="author">{authorLabel}{author}</div>
        <div className="genre">{genreLabel}{genre}</div>
        <div className="pages">{pagesLabel}{pages}</div>
      </div>
      <div className="stats">
        <div className="DaysTracker">{daysLabel}{days}</div>
        <button className="finishReading" id={buttonId} onClick={markComplete}>
          Mark as Complete
        </button>
      </div>
    </div>
  );
};

export default Book;
