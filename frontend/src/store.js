 //silce for user and articles
//we use the store to store user and post states
import { configureStore } from '@reduxjs/toolkit'
import { userSlice } from './features/UserSlice';
import { postSlice } from './features/postsSlice';
import appApi from './services/appApi';

export const store = configureStore({
  reducer: {
     user: userSlice,
     posts: postSlice,
     [appApi.reducerPath]: appApi.reducer,

  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(appApi.middleware),
});

export default store;