import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "src/redux/store";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    login: {},
    register: {},
  },
  reducers: {
    loginAction(state, { payload }) {},
    registerAction(state, { payload }) {},
  },
});

export const { loginAction, registerAction } = authSlice.actions;

// @ts-ignore
export const authState = (state: RootState) => state.entities.auth;

export default authSlice.reducer;
