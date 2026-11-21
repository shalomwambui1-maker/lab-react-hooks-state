import React from "react";

function Cart({ cartItems }) {
  return (
    <div className="Cart">
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={`${item.id}-${index}`}>{`${item.name} is in your cart.`}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Cart;