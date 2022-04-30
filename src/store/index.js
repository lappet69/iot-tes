/* eslint-disable import/no-anonymous-default-export */
import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers/rootReducers'
import {persistStore} from 'redux-persist';

//  export const store = createStore(rootReducer,applyMiddleware(thunk))
 export const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)))
 export const persistor= persistStore(store)

 export default {store,persistor}