import React, { useState } from 'react';
import './Navbar.css';
import Cart from './Cart';

const Navbar = ({ cartCount, cartItems, incrementQuantity, decrementQuantity }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleCartClick = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div>
      <nav className="navbar">
        <h1 className="logo">Shop</h1>
        <div className="cart" onClick={handleCartClick}>
          <span className="cart-icon">🛒</span>
          <span className="cart-count">{cartCount}</span>
        </div>
      </nav>

      {isCartOpen && (
        <Cart
          cartItems={cartItems}
          incrementQuantity={incrementQuantity}
          decrementQuantity={decrementQuantity}
        />
      )}
    </div>
  );
};

export default Navbar;
