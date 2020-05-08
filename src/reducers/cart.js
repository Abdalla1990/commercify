
let cartReducerDefaultState = {};

import { UPDATE_CART, TOGGLE_CART } from '../actions/cart'
export default (state = cartReducerDefaultState, action) => {
  switch (action.type) {
      case UPDATE_CART:
          return{  
            ...state,
            [action.cart.id]: action.cart
          }
      default:
          return state;
  }
};

export const toggleCart = (state = {cartOpned: false}, action) => {
  switch (action.type) {
    case TOGGLE_CART:
        return { cartOpned: action.value ? action.value :!state.cartOpned }
    default:
        return state;
}
}