import * as actionTypes from '../Types/products-types';
import { IFetchData } from '../Types/products-types';

const fetchRequested = () => ({ type: actionTypes.FETCH_PRODUCTS_REQUESTED });
const fetchSucceeded = (data: IFetchData) => ({
  type: actionTypes.FETCH_PRODUCTS_SUCCEEDED,
  payload: data,
});
const fetchFailed = () => ({ type: actionTypes.FETCH_PRODUCTS_FAILED });

export const fetchProducts = () =>
  // eslint-disable-next-line func-names
  function (dispatch: (arg: { type: string; payload?: any }) => void) {
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
