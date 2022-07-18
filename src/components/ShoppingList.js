import React, {useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setCategory] = useState("All");
  
  const handleCategoryChange =(e)=> {
    setCategory(e.target.value);
  }

  const newListItems = items.filter((item) =>{
    if (selectedCategory === "All") return true;
    return item.category === selectedCategory
  })

  
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange = {handleCategoryChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {newListItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
