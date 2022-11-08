import React from "react";
import Inspiration from "../inspirations/Inspiration";

function InspirationContainer({quotes, removeQuote, addToFavorites}) {
  return (
    <div className="poems-container">
      {quotes.map(quote => {
        return (
          <Inspiration
            key={quote.id} 
            quote={quote} 
            removeQuote={removeQuote} 
            addToFavorites={addToFavorites} 
          />
        )
        })}
    </div>
  );
}

export default InspirationContainer;

