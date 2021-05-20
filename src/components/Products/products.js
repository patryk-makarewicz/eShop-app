import React from 'react';

import styles from './products.module.scss';

const Products = ({ item }) => (
  <div className={styles.container}>
    <div className={styles.wrapper}>
      <div className={styles.image}>
        <img className={styles.image__img} src={item.image} alt="Item" />
      </div>
      <div className={styles.description}>
        <p>{item.title}</p>
        <p className={styles.description__paragraph}>Price: {item.price}$</p>
      </div>
    </div>
  </div>
);

export default Products;
