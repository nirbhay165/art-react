// src/components/ProductList.js
import React, { useState } from 'react';
import Product from './Product';

const ProductList = () => {
  // Example state variables
  const [products, setProducts] = useState([
    { id: 1, name: 'Artifacts', price: '₹ 999' },
    { id: 2, name: 'Red Rustic Warli Terracotta Vases (Set Of 3)', price: '₹ 599' },
    { id: 3, name: 'saree', price: '₹ 999' },
    { id: 4, name: 'Handmade paintings', price: '₹ 1599' },
    { id: 5, name: 'RadhaKrishana wall art painting', price: '₹ 399' },
    { id: 6, name: 'Tree canavas painting', price: '₹ 799' },
    { id: 7, name: 'handmade kolhapuri chappal', price: '₹ 699' },
    { id: 8, name: 'Kutchhi Mud and Mirror Wall painting', price: '₹ 899' },

    // Add more product data as needed
  ]);

  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value.trim().toLowerCase());
  };

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm)
  );

  const sortProductsByPrice = (order) => {
    const sortedProducts = [...products];
    sortedProducts.sort((a, b) => {
      const priceA = parseInt(a.price.split('₹ ')[1]);
      const priceB = parseInt(b.price.split('₹ ')[1]);
      return order === 'ascending' ? priceA - priceB : priceB - priceA;
    });
    setProducts(sortedProducts);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearch}
      />
      <button onClick={() => sortProductsByPrice('ascending')}>Sort Ascending</button>
      <button onClick={() => sortProductsByPrice('descending')}>Sort Descending</button>
      <div>
        {filteredProducts.map(product => (
          <Product key={product.id} name={product.name} price={product.price} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
