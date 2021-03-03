import { combineReducers } from 'redux';
import productsReducer from './Reducers/products-reducer';

const rootReducer = combineReducers({
  products: productsReducer,
});

export default rootReducer;
