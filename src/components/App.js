import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

const App = () => {
  // const [items, setItems] = useState(itemData);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleDarkModeClick = () => {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  const appClass = false ? "App dark" : "App light"

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <header>
        <h2>Shopster</h2>
        <button onClick={ handleDarkModeClick }>
          { isDarkMode ? "Dark " : "Light " }Mode
        </button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
