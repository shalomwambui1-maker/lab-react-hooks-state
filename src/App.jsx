import React, { useState } from "react";
import ProductList, { sampleProducts } from "./components/ProductList";
import DarkModeToggle from "./components/DarkModeToggle";
import Cart from "./components/Cart";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  function handleToggleDarkMode() {
    setIsDarkMode((prev) => !prev);
  }

  function handleAddToCart(product) {
    setCartItems((prev) => [...prev, product]);
  }

  function handleCategoryChange(e) {
    setSelectedCategory(e.target.value);
  }

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <header>
        <h1>Shopster</h1>
        <DarkModeToggle isDarkMode={isDarkMode} onToggle={handleToggleDarkMode} />
      </header>
      <ProductList
        products={sampleProducts}
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
        onAddToCart={handleAddToCart}
      />
      <Cart cartItems={cartItems} />
    </div>
  );
}

export default App;