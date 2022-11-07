import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const inspirationAPI = "htttp://localhost:9292/inspirations";

const [quoteData, setQuoteData] = useState({})
let { id } = useParams()
let quote_url = `http://localhost:9292/inspirations/${id}`;

useEffect(() => {
  fetch(quote_url)
  .then(response => response.json())
  .then(data => setQuoteData(data))
}, [])

let navigate = useNavigate();


const handleSubmit = (e) =>{
  e.preventDefault()
    fetch(`${inspirationAPI}/${id}`, {
        method: "PATCH",
        headers: {
          'content-type': 'application/json',
          "Access-Control-Allow-Origin" : "*"
        },
        body: JSON.stringify({
            title: quoteData.title,
            body: quoteData.body,
            authors_id: quoteData.authors_id,
            categories_id: quoteData.categories_id
        })
      })
      .then(response=>response.json())
      .then(data=>{
        console.log(data)   })
      navigate(`/inspirations`)
    };

    const onFormChange = (e) => {
      setQuoteData({...quoteData,[e.target.name]:e.target.value});
  };


const EditInspiration = () => {
  return (
    <div className='container'>
    <form className="new_poem_form" onSubmit={handleSubmit} >
      <input 
        placeholder="Title" 
        name='title'
        value={quoteData.title}
        type = "text"
        onChange={onFormChange}
      />

      <textarea 
        placeholder="Start creating something amazing here..." 
        rows={10} 
        value={quoteData.body}
        name='body'
        type = "text"
        onChange={onFormChange}
      />
      
      <input 
        type="submit" 
        value="Update" 
      />
  </form>
  </div>
  )
}

export default EditInspiration