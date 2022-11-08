import React from "react";
import Author from "./Author";

function AuthorContainer({authors, removeAuthor, addToFavorites}) {
  return (
    <div className="container">
      {authors.map(author => {
        return (
          <Author
            key={author.id} 
            author={author} 
            removeAuthor={removeAuthor} 
            addToFavorites={addToFavorites} 
          />
        )
        })}
    </div>
  );
}

export default AuthorContainer;

