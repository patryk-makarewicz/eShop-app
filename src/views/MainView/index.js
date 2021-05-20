import React, { useEffect } from 'react';

import { connect } from 'react-redux';

const MainView = (props) => {
  const { fetchProducts } = props;

  useEffect(() => {
    fetchProducts();
  }, []);

  return <p>MainView</p>;
};

const mapStateToProps = (state) => ({
  products: state.products.products,
});

export default connect(mapStateToProps)(MainView);
