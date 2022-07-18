import React, {useState} from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {
  const [newName, setNewName] = useState("");
  const [newCategory, setNewCategory] = useState("produce");

  function handleNameSubmits(event){
    setNewName(event.target.value);
  }

  function handleCategorySubmits(event){
    setNewCategory(event.target.value);
  }

  function SubmissionsFun(event){
    event.preventDefault();
    onItemFormSubmit({
      id: uuid(),
      newName,
      newCategory,
    });
  }
  
  return (
    <form className="NewItem" onSubmit= {SubmissionsFun}> 
      <label>
        Name:
        <input type="text" name="name" value = {newName} onChange={handleNameSubmits}  />
      </label>

      <label>
        Category:
        <select name="category" value = {newCategory} onChange={handleCategorySubmits}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit" >Add to List</button>
    </form>
  );
}

export default ItemForm;
