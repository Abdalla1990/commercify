import { createStore, combineReducers ,applyMiddleware} from 'redux';
import allReducers from '../reducers/'
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga'
import rootSaga from '../reducers/saga';

export default () => {

    const state = {} ;
    const sagaMiddleware = createSagaMiddleware()
    const reducers = allReducers
    
    const store = createStore(reducers, state, composeWithDevTools(applyMiddleware(sagaMiddleware)));
    sagaMiddleware.run(rootSaga);
    return store;
};
