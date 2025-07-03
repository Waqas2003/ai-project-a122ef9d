import React, { useState } from 'react';

function Cart() {
  const [cart, setCart] = useState({});

  return (
    <div className="container">
      <h1>Cart</h1>
      <ul>
        {Object.keys(cart).map(productId => (
          <li key={productId}>
            {cart[productId].name} x {cart[productId].quantity}
          </li>
        ))}
      </ul>
      <p>Total: ${Object.values(cart).reduce((acc, product) => acc + product.price * product.quantity, 0)}</p>
    </div>
  );
}

export default Cart;