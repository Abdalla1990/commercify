import { getStoreData, getNextPageData } from '../components/tools/getStoreData';
import { call,put, select} from 'redux-saga/effects';
import { SET_CURRENT, SET_PREVIOUS, CHANGE_PRODUCT , changePreviouslyBrowsedProduct, changeCurrentlyBrowsedProduct} from '../actions/router';

export function* sagaSetPreviouslyBrowsedProduct({id}) {
    
      const currentProduct = id; 
      const previousProduct = yield select( (state) => state.previouslyBrowsedProduct.current);
      if( currentProduct !== previousProduct ) {
        yield put({ type: SET_CURRENT, id: currentProduct })
        yield put({ type: SET_PREVIOUS, id: previousProduct })
      }

}




