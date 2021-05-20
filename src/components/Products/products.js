import React from 'react';

const Products = ({ item }) => (
  <div>
    <img style={{ width: '100px', height: '100px' }} src={item.image} alt="Item" />
    <p>{item.category}</p>
    <p>{item.title}</p>
    <p>{item.price}</p>
  </div>
);

export default Products;
