import React from 'react';

const Book = (props) => {
  const { title, image, author, pages, genre, id, days, markComplete} = props;
  const titleLabel = 'Title: ';
  const authorLabel = 'Author: ';
  const genreLabel = 'Genre: ';
  const pagesLabel = 'Page Count: ';
  const daysLabel = 'Days Reading: ';
  const buttonId = `button${id}`;

  return (
    <div className="book">
      <div className="bookImg"><img src={image}></img></div>
      <div className="data">
        <div className="title"><span className="label">{titleLabel}</span>{title}</div>
        <div className="author"><span className="label">{authorLabel}</span>{author}</div>
        <div className="genre"><span className="label">{genreLabel}</span>{genre}</div>
        <div className="pages"><span className="label">{pagesLabel}</span>{pages}</div>
        <div className="daysTracker"><span className="label">{daysLabel}</span>{days}</div>
      </div>
        <button className="complete" id={buttonId} onClick={markComplete}>
          &#10003; complete
        </button>
    </div>
  );
};

export default Book;
