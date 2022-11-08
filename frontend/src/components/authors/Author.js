import React, { useState } from 'react';

const authorAPI = "http://localhost:9292/poemauthors";



function Author({author, removeAuthor, addToFavorites}) {
  const {name,image} = author;

  function onDeleteClick(e) {
    e.preventDefault();
    fetch(`${authorAPI}/${author.id}`, {
      method: "DELETE",
    });
    removeAuthor(author);
  }  

  return (
<div className='scard'>
    <div className="cards">
    <div className="card" style={{width: 18 + 'rem', height: 400 + 'px'}}>
        <img src={image} className="card-img-top" alt={name}/>
        <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <button onClick={onDeleteClick} >
                Delete
            </button>

            <button onClick={() => addToFavorites(author)}>
                {author.isFavorite ? "Remove from favorites" : "Add to Favorites" }
            </button> 
        </div>
        </div>
    </div>
    </div>
  );
}

export default Author;
