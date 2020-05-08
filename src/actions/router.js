export const CHANGE_ROUTE = "CHANGE_ROUTE";
export const CHANGE_PAGE_TYPE = "CHANGE_PAGE_TYPE";
export const CHANGE_PRODUCT = "CHANGE_PRODUCT";
export const SET_CURRENT = 'SET_CURRENT';
export const SET_PREVIOUS = 'SET_PREVIOUS';
export const changeRoute = route => ({type:CHANGE_ROUTE,route});
export const changePageType = pageType => ({type:CHANGE_PAGE_TYPE,pageType});
export const changePreviouslyBrowsedProduct = id => ({ type: CHANGE_PRODUCT, id});
export const changeCurrentlyBrowsedProduct = id => ({ type: SET_CURRENT, id});