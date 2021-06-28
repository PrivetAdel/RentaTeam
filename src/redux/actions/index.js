import axios from 'axios';
import { SET_CATEGORIES, SET_PRODUCTS, SET_DELIVERY_OPTION, ADD_TO_CART, MINUS_CART_ITEM, PLUS_CART_ITEM, REMOVE_CART_ITEM, CLEAR_CART, SET_DELIVERY_ADDRESS, SHOW_TOOLTIP } from '../constants';

export const fetchData = () => (dispatch) => {
  axios.get('/categories')
    .then(res => dispatch(setCategories(res.data)))
    .catch(error => console.error('Error', error));

  axios.get('/products')
    .then(res => dispatch(setProducts(res.data)))
    .catch(error => console.error('Error', error));
};

export const setCategories = (categories) => ({
  type: SET_CATEGORIES,
  payload: categories
});

export const fetchProducts = () => (dispatch) => {
  axios.get('/products')
    .then(res => dispatch(setProducts(res.data)))
    .catch(error => console.error('Error', error))
};

export const setProducts = (products) => ({
  type: SET_PRODUCTS,
  payload: products
});

export const setDeliveryOption = (option) => ({
  type: SET_DELIVERY_OPTION,
  payload: option
});

export const addToCard = (product) => ({
  type: ADD_TO_CART,
  payload: product
});

export const minusCartItem = (id) => ({
  type: MINUS_CART_ITEM,
  payload: id
});

export const plusCartItem = (id) => ({
  type: PLUS_CART_ITEM,
  payload: id
});

export const removeCartItem = (id) => ({
  type: REMOVE_CART_ITEM,
  payload: id
});

export const clearCart = () => ({
  type: CLEAR_CART
});

export const setDeliveryAddress = (address) => ({
  type: SET_DELIVERY_ADDRESS,
  payload: address
});

export const showTooltip = (show) => ({
  type: SHOW_TOOLTIP,
  payload: show
});
