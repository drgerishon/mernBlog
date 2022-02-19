 //silce for user and articles
//we use the store to store user and post states
import { configureStore } from '@reduxjs/toolkit'
import { userSlice } from './features/UserSlice';
import { postSlice } from './features/postsSlice';
import appApi from './services/appApi';
import storage from 'redux-persist/lib/storage';
import {combineReducers} from 'redux';
import thunk from 'redux-thunk';
import {persistReducer} from 'redux-persist';


const reducers = combineReducers({
  user : userSlice,
  posts : postSlice,
  [appApi.reducerPath] : appApi.reducer,
});
const persistConfig = {
  key: "root",
  storage,
  blackList: [appApi.reducerPath],
};
const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk, appApi.middleware],
});
export default store;