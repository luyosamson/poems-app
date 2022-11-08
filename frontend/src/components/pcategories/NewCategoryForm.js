import React, { useState } from 'react';

const categoryAPI = "http://localhost:9292/poemcategories";

function NewCategoryForm({addPcategory}) {
  const [name, setName] = useState("");


  function handleSubmit(e) {
    const formData = {
      name: name,
    };
    e.preventDefault();
    fetch(categoryAPI, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
 
      .then((r) => r.json())
      .then((newCategory) => addPcategory(newCategory));
      setName("");
  }

  return (
    <form className="new-poem-form" onSubmit={handleSubmit} >
      <input 
        placeholder=" Category" 
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      
      <input 
        type="submit" 
        value="Add" 
      />
    </form>
  );
}

export default NewCategoryForm;
