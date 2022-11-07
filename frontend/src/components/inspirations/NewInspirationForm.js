import React, { useState } from 'react';

const quoteAPI = "http://localhost:9292/inspirations";

function NewInspirationForm({addQuote}) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [authors_id, setAuthor] = useState("");
  const [categories_id, setCategory] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    fetch(quoteAPI, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        body,
        authors_id,
        categories_id,
      }),
    })
      .then((r) => r.json())
      .then((newQuote) => addQuote(newQuote));

    setTitle("");
    setBody("");
    setAuthor("");
    setCategory("");
  }

  return (
    <form className="new-poem-form" onSubmit={handleSubmit} >
      <input 
        placeholder="Title" 
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input 
        placeholder="Author" 
        value={authors_id}
        onChange={(e) => setAuthor(e.target.value)}
      />

      <textarea 
        placeholder="Write your masterpiece here..." 
        rows={10} 
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />
      
      <input 
        type="submit" 
        value="Share your masterpiece" 
      />
    </form>
  );
}

export default NewInspirationForm;
