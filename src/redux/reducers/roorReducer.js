import {combineReducers} from 'redux';
import products from './products';
import delivery from './delivery';
import cart from './cart';

const rootReducer = combineReducers({
  products,
  delivery,
  cart
});

export default rootReducer;
