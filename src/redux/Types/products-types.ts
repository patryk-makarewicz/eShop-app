export interface IProductsState {
  products: {};
  isLoading: boolean;
  isError: boolean;
}

export interface IFetchData {
  data: {};
}

export const FETCH_PRODUCTS_REQUESTED = 'FETCH_PRODUCTS_REQUESTED';
export const FETCH_PRODUCTS_SUCCEEDED = 'FETCH_PRODUCTS_SUCCEEDED';
export const FETCH_PRODUCTS_FAILED = 'FETCH_PRODUCTS_FAILED';
