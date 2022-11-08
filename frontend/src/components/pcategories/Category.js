import React, { useState } from 'react';

const categoryAPI = "http://localhost:9292/poemcategories";



function Category({category, removeCategory}) {
  const {name} = category;
  const [isRead, setIsRead] = useState(false)

  function onDeleteClick(e) {
    e.preventDefault();
    fetch(`${categoryAPI}/${category.id}`, {
      method: "DELETE",
    });
    removeCategory(category);
  }
  

  return (
    <div>
         <div class="card">
        <div class="card-body">
        <p className='pbody'>{name} poems and quotes</p>
            <button onClick={onDeleteClick} >
                Delete
            </button>

        </div>
    </div>
</div>
  );
}

export default Category;
