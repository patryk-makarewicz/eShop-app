/* eslint-disable arrow-body-style */
import * as actionTypes from '../Types/products-types';

const fetchRequested = () => ({ type: actionTypes.FETCH_PRODUCTS_REQUESTED });
const fetchSucceeded = (data) => ({
  type: actionTypes.FETCH_PRODUCTS_SUCCEEDED,
  payload: data,
});
const fetchFailed = () => ({ type: actionTypes.FETCH_PRODUCTS_FAILED });

export const fetchProducts = () => {
  // eslint-disable-next-line func-names
  return function (dispatch) {
    dispatch(fetchRequested());
    fetch('https://fakestoreapi.com/products/')
      .then((response) => response.json())
      .then((products) => {
        dispatch(fetchSucceeded(products));
      })
      // eslint-disable-next-line no-unused-vars
      .catch((error) => {
        dispatch(fetchFailed());
      });
  };
};
