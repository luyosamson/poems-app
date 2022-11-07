import React, {useState} from 'react'
import { Link } from 'react-router-dom'

const inspirationAPI = "http://localhost:9292/inspirations";


const Inspiration = ({ quote, removeQuote, addToFavorites }) => {

    const {title, body, authors_id} = quote;
    

    function handleDelete(e) {
        e.preventDefault();
        fetch(`${inspirationAPI}/${quote.id}`, {
          method: "DELETE",
        });
        removeQuote(quote);
      }

      const authorAPI =`http://localhost:9292//poemauthors/${authors_id}`
      const edit = `/edit/${quote.id}`


  return (
    <div className='inspiration_quote'>
        <h3>{title}</h3>
        <p>{body}</p>
        <h4>Done by: {authors_id}</h4>
        <button>
            <Link to={`/edit/${quote.id}`}>Edit</Link> 
        </button>
        <button onClick={handleDelete}>Delete</button>
        <button onClick={() => addToFavorites(quote)}>{quote.isFav ? "Remove from Favorites" : "Add to Favorites"}</button>
    </div>
  )
}

export default Inspiration