import { SET_DELIVERY_OPTION, SET_DELIVERY_ADDRESS, SHOW_TOOLTIP } from '../constants';

const initialState = {
  deliveryOption: 'pickup',
  address: {
    street: '',
    house: ''
  },
  showTooltip: false 
};

const products = (state = initialState, action) => {
  switch (action.type) {
    case SET_DELIVERY_OPTION:
      return {
        ...state,
        deliveryOption: action.payload
      };

    case SET_DELIVERY_ADDRESS:
      return {
        ...state,
        address: action.payload
      };

    case SHOW_TOOLTIP:
      return {
        ...state,
        showTooltip: action.payload
      }
      
    default: 
      return state;
  }
};

export default products;
