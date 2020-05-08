import { getStoreData, getNextPageData } from '../components/tools/getStoreData';
import { call,put, takeEvery , all, fork} from 'redux-saga/effects';
import {RECEIVE_COLLECTIONS_DATA,REQUEST_COLLECTIONS_DATA,ERRO_CATEGORIES_DATA_FETCH, REQUEST_COLLECTION_DATA, RECEIVE_COLLECTION_DATA} from '../actions/collections';

export function* sagaFetchShopifyCategories() {
    try {
        const response =  yield call(getStoreData);
        console.log('response', response.data);
        let collections = response.data;
        yield put({type: RECEIVE_COLLECTIONS_DATA, ...collections})
    } catch (error) {
        yield put({type: ERRO_CATEGORIES_DATA_FETCH})
    }
}

export function* sagaFetchCollectionData({data}) {
  try {
    const { dataType, id, cursor } = data;
    console.log(data)
    const response = yield call(getNextPageData, dataType, cursor, id);
    console.log('response', response.data);
    const newPatch = response.data;
    yield put({type: RECEIVE_COLLECTION_DATA, patch: {...newPatch[id]}, artist: id })
  }catch (error) {
    yield put({type: ERRO_CATEGORIES_DATA_FETCH})
  }
}



