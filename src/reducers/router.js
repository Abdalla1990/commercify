
let routerReducerDefaultState = [];

import { CHANGE_ROUTE , SET_PREVIOUS, SET_CURRENT} from '../actions/router';
export default (state = routerReducerDefaultState, action) => {
  switch (action.type) {
      case CHANGE_ROUTE:
          return action.route
      default:
          return state;
  }
};

let pdpDefaultState = {
  previous: '',
  current: '',
}
export const previouslyBrowsedProduct = (state = pdpDefaultState, action) => {
  switch (action.type) {

    case SET_CURRENT: 
      return {...state, current: action.id}
    case SET_PREVIOUS: 
    return {...state, previous: action.id}
    default:
        return state;
  }
}