// src/components/Navbar.jsx
import React from 'react';
import './Navbar.css';

const Navbar = ({ sortProductsByPrice, handleSearch }) => (
  <header>
    <nav style={{ position: 'fixed', top: 0, width: '100%', zIndex: 1000, backgroundColor: '#ede4e0' }}>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#" style={{ color: '#623e2a' }}><b>Explore</b></a></li>
        <li><a href="#">Locality</a></li>
        <li><a href="#">Trending</a></li>
      </ul>
      <form className="search-bar" action="#" method="get">
        <input type="text" id="searchInput" placeholder="Search..." onChange={handleSearch} />
        <button type="submit">Search</button>
      </form>
      <div className="cart">
        <button className="cart-button" onClick={() => alert('Cart clicked!')}>
          <img src="cart.png" alt="Cart" />
          Cart
        </button>
      </div>
      <div className="dropdown">
        <button className="dropbtn">Sort by Price</button>
        <div className="dropdown-content">
          <a href="#" onClick={() => sortProductsByPrice('ascending')}>Low to High</a>
          <a href="#" onClick={() => sortProductsByPrice('descending')}>High to Low</a>
        </div>
      </div>
    </nav>
  </header>
);

export default Navbar;
