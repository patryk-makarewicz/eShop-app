export interface IDemoState {
  products: {};
  isLoading: boolean;
  isError: boolean;
}

export const FETCH_PRODUCTS_REQUESTED = 'FETCH_PRODUCTS_REQUESTED';
export const FETCH_PRODUCTS_SUCCEEDED = 'FETCH_PRODUCTS_SUCCEEDED';
export const FETCH_PRODUCTS_FAILED = 'FETCH_PRODUCTS_FAILED';
