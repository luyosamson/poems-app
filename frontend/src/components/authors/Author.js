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

  


  
//   const authorAPI =`http://localhost:9292//poemauthors/${authors_id}`
  

  return (
<div className='scard'>
    <div className="cards">
    <div className="card" style={{width: 18 + 'rem', height: 400 + 'px'}}>
        <img src={image} className="card-img-top" alt={name}/>
        <div className="card-body">
            <h5 className="card-title">{name}</h5>
            {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
            {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
            <button onClick={onDeleteClick} >
                Delete
            </button>

            <button onClick={() => addToFavorites(author)}>
                {author.isFavorite ? "Unfavorite" : "♥ Favorite" }
            </button> 
        </div>
        </div>
    </div>
    </div>
  );
}

export default Author;
