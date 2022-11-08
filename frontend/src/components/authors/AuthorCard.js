import React, { useState, useEffect } from 'react';
import AuthorContainer from '../authors/AuthorContainer';
import NewAuthorForm from '../authors/NewAuthorForm';

const authorAPI = "http://localhost:9292/poemauthors";

function AuthorCard() {
  const [authors, setAuthors] = useState([]);
  const [formVisible, setFormVisible] = useState(true);
  const [favoriteVisible, setFavoriteVisible] = useState(true);
  const authorsToDisplay = authors.filter((author) => favoriteVisible || author.isFavorite);

  useEffect(() => {
    fetch(authorAPI)
      .then(res => res.json())
      .then(data => setAuthors(data))
  }, []);

  function addAuthor(newAuthor) {
    setAuthors([...authors, newAuthor]);
  }

  function removeAuthor(authorToRemove) {
    setAuthors(authors.filter(author => author.id !== authorToRemove.id))
  }

  function addToFavorites(favauthor) {
    setAuthors(authors.map(author => {
      return author.id === favauthor.id ? {...favauthor, isFavorite: !favauthor.isFavorite} : author
      }  
    ))
  }

  function renderauthorView() {
    if (authorsToDisplay.length === 0 && !favoriteVisible) {
      return (<h1>You have no favorites added</h1>)
    } else {
      return (
        <AuthorContainer 
          authors={authorsToDisplay} 
          removeAuthor={removeAuthor} 
          addToFavorites={addToFavorites}
        />
      )
    }
  }

  return (
    <div className="app">
      <div className="sidebar">
        <button 
          onClick={() => setFormVisible(!formVisible)} >
          Show/hide new author form
        </button>
        {formVisible ? <NewAuthorForm addAuthor={addAuthor} /> : null}

        <button onClick={() => setFavoriteVisible(!favoriteVisible)} >
          Show/hide Favorite authors
        </button>
      </div>
      {renderauthorView()}
    </div>
  );
}

export default AuthorCard;