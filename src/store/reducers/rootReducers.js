import { combineReducers } from "redux";
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import API from './api.reducer'

const persistConfig ={
  key:'root',
  storage,
  whitelist:['API']
}


const rootReducer = combineReducers({

  API:API,
});

export default persistReducer(persistConfig, rootReducer)
