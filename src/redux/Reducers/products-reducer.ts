import * as actionTypes from '../Types/products-types';
import { IDemoState } from '../Types/products-types';

const INITIAL_STATE: IDemoState = {
  products: [],
  isLoading: false,
  isError: false,
};

const productsReducer = (state: IDemoState = INITIAL_STATE, action: any): IDemoState => {
  switch (action.type) {
    case actionTypes.FETCH_PRODUCTS_REQUESTED:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case actionTypes.FETCH_PRODUCTS_SUCCEEDED:
      return {
        ...state,
        isLoading: false,
        isError: false,
        products: action.payload,
      };
    case actionTypes.FETCH_PRODUCTS_FAILED:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      return state;
  }
};

export default productsReducer;
