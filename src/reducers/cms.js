
let cmsReducerDefaultState = [];

import { POST_MODULES, POST_PAGES } from '../actions/cms'
export default (state = cmsReducerDefaultState, action) => {
  switch (action.type) {
      case POST_MODULES:
          return {...state, [action.key]: [...action.modules]}
      case POST_PAGES:
          return {...state, [action.key]: [...action.pages]}
      default:
          return state;
  }
};