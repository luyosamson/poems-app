import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';


const inspirationAPI = "http://localhost:9292/inspirations";

export default function EditInspiration() {
   
  // const [title, setTitle] = useState("");
  // const [body, setBody] = useState("");
  // const [authors_id, setAuthor] = useState("");
  // const [categories_id, setCategory] = useState("");
  // const {title, body, authors_id} = quotes;

    const [quoteData, setQuoteData] = useState({})
    let { id } = useParams()
    let quote_url = `http://localhost:9292/inspirations/${id}`;
    
    useEffect(()=>{
        fetch(quote_url)
        .then(response=>response.json())
        .then(data=>setQuoteData(data))
    },[])
     let navigate = useNavigate();
      console.log(quoteData)

      const handleSubmit = (e) =>{
        e.preventDefault()
        // e.stopPropagation()
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
      

  return (
    <div className='container'>
      <form className="new-poem-form" onSubmit={handleSubmit} >
        <input 
          placeholder="Title" 
          name='title'
          value={quoteData.title}
          type = "text"
          onChange={onFormChange}
        />

        <textarea 
          placeholder="Write your masterpiece here..." 
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

