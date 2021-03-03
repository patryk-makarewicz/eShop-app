import * as actionTypes from '../Types/products-types';
import { IProductsState } from '../Types/products-types';

const INITIAL_STATE: IProductsState = {
  products: [],
  isLoading: false,
  isError: false,
};

const productsReducer = (state: IProductsState = INITIAL_STATE, action: any): IProductsState => {
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
