import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { loadUser } from "../actions/count";

interface User {
  id: number,
  email: string,
  first_name: string,
  last_name: string,
  avatar: string
}

interface CountState{
  val: number,
  loadUserLoading: boolean,
  loadUserDone: boolean,
  loadUserError: any,
  user: User | null
}

const initialState: CountState = {
  val: 0,
  user: null,
  loadUserLoading: false,
  loadUserDone: false,
  loadUserError: null
};

export const countSlice = createSlice({
  name: 'count',
  initialState,
  reducers: {
    increment(state){
      state.val += 1;
    },
    decrement(state){
      state.val -= 1;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadUser.pending, (state) => {
        state.loadUserLoading = true;
      })
      .addCase(loadUser.fulfilled, (state, action) => {
        console.log(action.payload);
        state.loadUserDone = true;
        state.user = action.payload;
      })
      .addCase(loadUser.rejected, (state, action) => {
        state.loadUserLoading = false;
        state.loadUserDone = true;
        state.loadUserError = action.payload;
      })
  }
});

export const { increment, decrement } = countSlice.actions;
export default countSlice.reducer;