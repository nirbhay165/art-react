// src/App.jsx
import React, { useState } from 'react';
import Navbar from './components/Navbar.jsx';
import ProductList from './components/ProductList.jsx';
import './App.css';

const App = () => {
  const [products, setProducts] = useState([
    { id: 1, name: 'Artifacts', price: '₹ 999' },
    { id: 2, name: 'Red Rustic Warli Terracotta Vases (Set Of 3)', price: '₹ 599' },
    { id: 3, name: 'Saree', price: '₹ 1599' },
    { id: 4, name: 'Handmade paintings', price: '₹ 399' },
    { id: 5, name: 'RadhaKrishana wall art painting', price: '₹ 499' },
    { id: 6, name: 'Tree canvas painting', price: '₹ 799' },
    { id: 7, name: 'Handmade kolhapuri chappal', price: '₹ 699' },
    { id: 8, name: 'Kutchhi Mud and Mirror Wall painting', price: '₹ 899' }
  ]);

  const [searchTerm, setSearchTerm] = useState('');

  const sortProductsByPrice = (order) => {
    const sortedProducts = [...products];
    sortedProducts.sort((a, b) => {
      const priceA = parseInt(a.price.split('₹ ')[1]);
      const priceB = parseInt(b.price.split('₹ ')[1]);
      return order === 'ascending' ? priceA - priceB : priceB - priceA;
    });
    setProducts(sortedProducts);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value.trim().toLowerCase());
  };

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm)
  );

  return (
    <div>
      <Navbar sortProductsByPrice={sortProductsByPrice} handleSearch={handleSearch} />
      <ProductList products={filteredProducts} />
    </div>
  );
};

export default App;
