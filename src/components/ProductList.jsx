import React from "react";
import ProductCard from "./ProductCard";

function ProductList({ products, selectedCategory, onCategoryChange, onAddToCart }) {
  const categories = ["All", ...new Set(products.map((p) => p.category))];

  const visibleProducts =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <div>
      <label htmlFor="category">Filter by category: </label>
      <select id="category" value={selectedCategory} onChange={onCategoryChange}>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
      {visibleProducts.length === 0 ? (
        <p>No products available.</p>
      ) : (
        <ul className="Products">
          {visibleProducts.map((product) => (
            <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
          ))}
        </ul>
      )}
    </div>
  );
}

export default ProductList;