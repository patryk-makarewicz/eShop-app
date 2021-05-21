import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchProducts } from 'redux/Actions/products-actions';
import Products from 'components/Products/products';

const MainView = (props) => {
  const { products, isLoading, isError } = props;

  useEffect(() => {
    props.fetchProducts();
    console.log(products);
  }, []);

  return (
    <div>
      {isError && <p>UPSS...PLEASE TRY AGAIN</p>}
      {isLoading && <p>LOADING...</p>}
      <p>MainView</p>
      {products.map((item) => (
        <Products item={item} key={item.id} />
      ))}
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchProducts: () => dispatch(fetchProducts()),
});

const mapStateToProps = (state) => ({
  products: state.products.products,
  isLoading: state.products.isLoading,
  isError: state.products.isError,
});

export default connect(mapStateToProps, mapDispatchToProps)(MainView);
