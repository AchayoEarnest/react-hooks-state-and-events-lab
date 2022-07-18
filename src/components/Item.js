import React, {useState} from "react";

const Item = ({ name, category }) => {

  const [isAdded, setIsAdded] = useState(false);

  const handleIsAdded = () => {
    setIsAdded((isAdded) => !isAdded)
  }  
  
  return (
    <li className={isAdded? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={ isAdded ? "remove" : "add" } onClick={ handleIsAdded }
      >{isAdded ? "Remove From" : "Add to" }Cart
      </button>
    </li>
  );
}

export default Item;
