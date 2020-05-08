import { getStoreData, getNextPageData } from '../components/tools/getStoreData';
import { call,put, takeEvery , all} from 'redux-saga/effects';
import {RECEIVE_COLLECTIONS_DATA,REQUEST_COLLECTIONS_DATA,ERRO_CATEGORIES_DATA_FETCH, REQUEST_COLLECTION_PATCH, RECEIVE_COLLECTION_DATA} from '../actions/collections';
import { sagaFetchShopifyCategories, sagaFetchCollectionData } from '../sagas/collections';
import { sagaSetPreviouslyBrowsedProduct } from '../sagas/pdp';
import { CHANGE_PRODUCT } from '../actions/router';

export function* watchFetchShopifyCategories() {
    yield takeEvery(REQUEST_COLLECTIONS_DATA, sagaFetchShopifyCategories);
}
export function* watchFetchCollectionNewPatch() {
  yield takeEvery(REQUEST_COLLECTION_PATCH, sagaFetchCollectionData)
}
export function* watchSetPreviouslyBrowsedProduct() {
  yield takeEvery(CHANGE_PRODUCT, sagaSetPreviouslyBrowsedProduct)
}
export default function* rootsaga() {
  yield all([
    watchFetchShopifyCategories(),
    watchFetchCollectionNewPatch(),
    watchSetPreviouslyBrowsedProduct(),
  ])
}