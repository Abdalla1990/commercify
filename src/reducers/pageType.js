
let routerReducerDefaultState = "";

import { CHANGE_PAGE_TYPE } from '../actions/router';
export default (state = routerReducerDefaultState, action) => {
  switch (action.type) {
      case CHANGE_PAGE_TYPE:
          return action.pageType
      default:
          return state;
  }
};