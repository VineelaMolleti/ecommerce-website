// src/components/Product.js
import React, { useState } from 'react';

const Product = ({ product, addToCart }) => {
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    addToCart({ ...product, quantity: parseInt(quantity) });
  };

  return (
    <div className="product">
      <h3>{product.title}</h3>
      <img src={product.image} alt={product.title} width="100" />
      <p>Price: ${product.price}</p>
      <div>
        <label>Quantity: </label>
        <input
          type="number"
          min="1"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
      </div>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default Product;
