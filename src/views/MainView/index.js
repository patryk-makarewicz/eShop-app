import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchProducts } from 'redux/Actions/products-actions';

const MainView = (props) => {
  const { products } = props;

  useEffect(() => {
    props.fetchProducts();
    console.log(products);
  }, []);

  return <p>MainView</p>;
};

const mapDispatchToProps = (dispatch) => ({
  fetchProducts: () => dispatch(fetchProducts()),
});

const mapStateToProps = (state) => ({
  products: state.products.products,
});

export default connect(mapStateToProps, mapDispatchToProps)(MainView);
