import { combineReducers } from 'redux';
import cms_reducer from './cms';
import router_reducer, { previouslyBrowsedProduct,  } from './router';
import cart_reducer from './cart';
import pageType_reducer from './pageType';
import collections_reducer from './collections'
import { toggleCart } from './cart'
 
export default combineReducers({
  cmsData: cms_reducer, 
  collections: collections_reducer,
  route: router_reducer,
  pageType: pageType_reducer,
  cart: cart_reducer,
  toggleCart,
  previouslyBrowsedProduct,
});