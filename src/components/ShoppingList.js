import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, onItemFormSubmit}) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchItem, setSearchItem] = useState("search");
  
  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
    
  }
 
  const itemsToDisplay = items
  .filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  })
  .filter((item) => item.name.toLowerCase().includes(searchItem.toLowerCase()));
  // .filter((item) =>{
  //   if(searchItem === "search") return true;

  //   return item.name === searchItem;
  // });

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit= {onItemFormSubmit}  />
      <Filter onCategoryChange={handleCategoryChange} onSearchChange= {setSearchItem}
      search = {searchItem} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
        {/* {searchInput.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))} */}
      </ul>
    </div>
  );
}

export default ShoppingList;
