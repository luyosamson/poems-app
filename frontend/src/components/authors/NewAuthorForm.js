import React, { useState } from 'react';

const quoteAPI = "http://localhost:9292/poemauthors";

function NewAuthorForm({addAuthor}) {
  const [name, setName] = useState("");
  const [image,setImage] = useState("");


  function handleSubmit(e) {
    e.preventDefault();
    fetch(quoteAPI, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        image,
      }),
    })
      .then((r) => r.json())
      .then((newAuthor) => addAuthor(newAuthor));

    setName("");
    setImage("");
  }

  return (
    <div className=''>
    <form className="new-poem-form" onSubmit={handleSubmit} >
      <input 
        placeholder="name" 
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input 
        placeholder="AuthorImage" 
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />

      
      <input 
        type="submit" 
        value="Add Author" 
      />
    </form>
    </div>
  );
}

export default NewAuthorForm;
