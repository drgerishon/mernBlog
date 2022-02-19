import { createSlice } from '@reduxjs/toolkit';
import appApi from "../services/appApi";

const initialState = {};

export const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {

    builder.addMatcher(appApi.endpoints.signupUser.matchFulfilled, (state, {payload}) =>{
      state.user = payload;
    });
    builder.addMatcher(appApi.endpoints.loginUser.matchFulfilled, (state, {payload})=>{
      state.user = payload;
    } )
  }
 
});

export default userSlice.reducer;