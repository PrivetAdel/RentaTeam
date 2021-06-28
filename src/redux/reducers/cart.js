import { ADD_TO_CART, MINUS_CART_ITEM, PLUS_CART_ITEM, REMOVE_CART_ITEM, CLEAR_CART } from '../constants';

const initialState = {
  cart: {},
  totalPrice: 0
};

const getTotalPrice = (obj) => {
  const total = Object.values(obj).reduce((sum, obj) => {
    return sum + (obj.count * obj.product.price)
  }, 0);

  return total;
}

const cart = (state = initialState, action) => {
  let currentCart;

  switch (action.type) {
    case ADD_TO_CART:
      currentCart = {
        ...state.cart,
          ...{[action.payload.id]: {
            count: 1,
            product: action.payload
        }}
      };

      return {
        ...state,
        cart: currentCart,
        totalPrice: getTotalPrice(currentCart)
      };

    case MINUS_CART_ITEM: 
      const item = (id) => ({
        count: state.cart[id].count - 1,
        product: state.cart[id].product
      });

      currentCart = {
        ...state.cart,
        [action.payload]: item(action.payload)
      };

      return {
        ...state,
        cart: currentCart,
        totalPrice: getTotalPrice(currentCart)
      };

    case PLUS_CART_ITEM: 
      const newItem = (id) => ({
        count: state.cart[id].count + 1,
        product: state.cart[id].product
      });

      currentCart = {
        ...state.cart,
        [action.payload]: newItem(action.payload)
      };

      return {
        ...state,
        cart: currentCart,
        totalPrice: getTotalPrice(currentCart)
      };

    case REMOVE_CART_ITEM:
      const newCart = (id) => {
        const copyCart = JSON.parse(JSON.stringify(state.cart));
        delete copyCart[id];

        return copyCart;
      };

      currentCart = newCart(action.payload);

      return {
        ...state,
        cart: currentCart,
        totalPrice: getTotalPrice(currentCart)
      };

    case CLEAR_CART:
      return initialState;
      
    default: 
      return state;
  }
};

export default cart;
