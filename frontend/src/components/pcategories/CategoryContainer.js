import React from "react";
import Category from "./Category";

function CategoryContainer({categories, removeCategory, addToFavorites}) {
  return (
    <div className="poems-container">
      {categories.map(category => {
        return (
          <Category
            key={category.id} 
            category={category} 
            removeCategory={removeCategory} 
            addToFavorites={addToFavorites} 
          />
        )
        })}
    </div>
  );
}

export default CategoryContainer;

