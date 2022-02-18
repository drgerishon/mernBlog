 //silce for user and articles
//we use the store to store user and post states
import { configureStore } from '@reduxjs/toolkit'
import { userSlice } from './features/UserSlice';
import { postSlice } from './features/postsSlice';

export const store = configureStore({
  reducer: {
     user: userSlice,
     posts: postSlice,
  },
});

export default store;