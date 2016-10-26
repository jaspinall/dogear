import React, { PropTypes } from 'react';

const Form = (props) => {
  const { title, author, pages, genre, updateForm } = props;

  return (
    <div id="form">
      <input type="text"
        id="newTitle"
        placeholder="title"
        value={title}
        onChange={updateForm}/>
      <input type="text"
        id="newAuthor"
        placeholder="author"
        value={author}
        onChange={updateForm}/>
      <input type="text"
        id="newPages"
        placeholder="pages"
        value={pages}
        onChange={updateForm}/>
      <input type="text"
        id="newGenre"
        placeholder="genre"
        value={genre}
        onChange={updateForm}/>
      <button onClick="">Submit</button>
    </div>
  );

}

export default Form;
