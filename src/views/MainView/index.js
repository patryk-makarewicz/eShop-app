import React, { useEffect } from 'react';

import { connect } from 'react-redux';
import { fetchProducts } from '../../redux/Actions/products-actions';

const MainView = (props) => {
  useEffect(() => {
    props.fetchProducts();
  }, []);

  return <p>MainView</p>;
};

const mapDispatchToProps = (dispatch) => ({
  fetchProducts: () => dispatch(fetchProducts()),
});

const mapStateToProps = (state) => ({
  books: state.products.products,
});

export default connect(mapStateToProps, mapDispatchToProps)(MainView);
