// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductList from './components/productList';
import Cart from './components/cart';
import Navbar from './components/navbar';

function App() {
  const [cartItems, setCartItems] = useState([]);

  // Add product to the cart if it's not already there
  const addToCart = (product) => {
    const exist = cartItems.find((item) => item.id === product.id);
    if (exist) {
      alert('Product is already in the cart!');
    } else {
      setCartItems([...cartItems, product]);
    }
  };

  // Remove product from the cart
  const removeFromCart = (product) => {
    setCartItems(cartItems.filter((item) => item.id !== product.id));
  };

  return (
    <Router>
      <Navbar cartItems={cartItems} />
      <Routes>
        <Route
          path="/"
          element={<ProductList addToCart={addToCart} />}
        />
        <Route
          path="/cart"
          element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
