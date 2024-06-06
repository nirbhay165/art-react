import React from 'react';
import product1Image from '../assets/product1.jpg';
import product2Image from '../assets/product2.jpg';
import product3Image from '../assets/product3.jpg';
import product4Image from '../assets/product4.jpg';
import product5Image from '../assets/product5.jpg';
import product6Image from '../assets/product6.jpg';
import product7Image from '../assets/product7.jpg';
import product8Image from '../assets/product8.jpg';
import './Product.css'; // Import your CSS file if needed

const Product = ({ name, price, imageUrl, altText }) => (
  <section className="product">
    <img src={imageUrl} alt={altText} />
    <h3>{name}</h3>
    <p className="product-price">{price}</p>
    <button>Add to Cart</button>
  </section>
);

const Products = () => {
  return (
    <div>
      <Product
        name="Artifacts"
        price="₹ 999"
        imageUrl={product1Image}
        altText="Artifacts"
      />
      <Product
        name="Red Rustic Warli Terracotta Vases (Set Of 3)"
        price="₹ 599"
        imageUrl={product2Image}
        altText="Red Rustic Warli Terracotta Vases (Set Of 3)"
      />
      <Product
        name="Saree"
        price="₹ 1599"
        imageUrl={product3Image}
        altText="Saree"
      />
      <Product
        name="Handmade Paintings"
        price="₹ 399"
        imageUrl={product4Image}
        altText="Handmade Paintings"
      />
      <Product
        name="RadhaKrishana Wall Art Painting"
        price="₹ 499"
        imageUrl={product5Image}
        altText="RadhaKrishana Wall Art Painting"
      />
      <Product
        name="Tree Canvas Painting"
        price="₹ 799"
        imageUrl={product6Image}
        altText="Tree Canvas Painting"
      />
      <Product
        name="Handmade Kolhapuri Chappal"
        price="₹ 699"
        imageUrl={product7Image}
        altText="Handmade Kolhapuri Chappal"
      />
      <Product
        name="Kutchhi Mud and Mirror Wall Painting"
        price="₹ 899"
        imageUrl={product8Image}
        altText="Kutchhi Mud and Mirror Wall Painting"
      />
    </div>
  );
}

export default Products;
