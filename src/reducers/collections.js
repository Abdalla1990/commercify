
let collectionsReducerDefaultState = [];

import {RECEIVE_COLLECTIONS_DATA,RECEIVE_COLLECTION_DATA,ERRO_CATEGORIES_DATA_FETCH} from '../actions/collections';

export default (state = collectionsReducerDefaultState, action) => {
    switch (action.type) {

        case RECEIVE_COLLECTIONS_DATA:
            return [...state, ...action.collections]
        case RECEIVE_COLLECTION_DATA:
          return state.map(collection => {
            if(collection.artist === action.artist ){
              action.patch.products = [...collection.products, ...action.patch.products]
              return action.patch;
            } else {
            return collection
            }
          });
          
        default:
            return state;
    }

};