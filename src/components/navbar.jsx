// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const navbar = ({ cartItems }) => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Products</Link></li>
        <li><Link to="/cart">Cart ({cartItems.length})</Link></li>
      </ul>
    </nav>
  );
};

export default navbar;
