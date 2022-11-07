import React, { useState, useEffect } from 'react';
import InspirationContainer from './InspirationContainer';
import NewInspirationForm from './NewInspirationForm';

const quoteAPI = "http://localhost:9292/inspirations";

const InspirationCard = () => {

    const [quotes, setquotes] = useState([]);
    const [formVisible, setFormVisible] = useState(true);
    const [favoriteVisible, setFavoriteVisible] = useState(true);
    const quotesToDisplay = quotes.filter((quote) => favoriteVisible || quote.isFav);


    useEffect(() => {
        fetch(quoteAPI)
          .then(res => res.json())
          .then(data => setquotes(data))
      }, []);


      function addQuote(newQuote) {
        setquotes([...quotes, newQuote]);
      }

      function removeQuote(quoteToRemove) {
        setquotes(quotes.filter(quote => quote.id !== quoteToRemove.id))
      }

      function addToFavorites(favquote) {
        setquotes(quotes.map(quote => {
          return quote.id === favquote.id ? {...favquote, isFav: !favquote.isFav} : quote
          }  
        ))
      }

      function renderquoteView() {
        if (quotesToDisplay.length === 0 && !favoriteVisible) {
          return (<h1>You have no favorites added</h1>)
        } else {
          return (
            <InspirationContainer 
              quotes={quotesToDisplay} 
              removeQuote={removeQuote} 
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
        Show/hide new quote form
      </button>
      {formVisible ? <NewInspirationForm addQuote={addQuote} /> : null}

      <button onClick={() => setFavoriteVisible(!favoriteVisible)} >
        Show/hide Favorite quotes
      </button>
    </div>
    {renderquoteView()}
  </div>
  )
}

export default InspirationCard