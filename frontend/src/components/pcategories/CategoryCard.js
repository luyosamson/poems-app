import React, { useState, useEffect } from 'react';
import CategoryContainer from './CategoryContainer';
import NewCategoryForm from './NewCategoryForm';

const pcategoryAPI = "http://localhost:9292/poemcategories";
// id, title, content, authore

function CategoryCard() {
  const [pcategories, setPcategories] = useState([]);
  const [formVisible, setFormVisible] = useState(true);
  const [favoriteVisible, setFavoriteVisible] = useState(true);
  const categoriesToDisplay = pcategories.filter((category) => favoriteVisible || category.isFavorite);

  useEffect(() => {
    fetch(pcategoryAPI)
      .then(res => res.json())
      .then(data => setPcategories(data))
  }, []);

  function addPcategory(newCategory) {
    setPcategories([...pcategories, newCategory]);
  }

  function removeCategory(categoryToRemove) {
    setPcategories(pcategories.filter(category => category.id !== categoryToRemove.id))
  }

  function addToFavorites(favPoem) {
    setPcategories(pcategories.map(category => {
      return category.id === favPoem.id ? {...favPoem, isFavorite: !favPoem.isFavorite} : category
      }  
    ))
  }

  function renderPoemView() {
      return (
        <CategoryContainer 
          categories={categoriesToDisplay} 
          removeCategory={removeCategory} 
          addToFavorites={addToFavorites}
        />
      )
  }

  return (
    <div>
      <div className="app">
        <div className="sidebar">
          <button >
            New Category Form
          </button>
          {formVisible ? <NewCategoryForm addPcategory={addPcategory} /> : null}
        </div>
        
        {renderPoemView()}
      </div>
    </div>
  );
}

export default CategoryCard;