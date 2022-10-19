import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "src/redux/store";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    login: {},
    register: {},
    isSuccess: false,
  },
  reducers: {
    loginAction(state, { payload }) {
      console.log("payload", payload);
      state.login = payload;
      state.isSuccess = true;
    },
    registerAction(state, { payload }) {
      state.register = payload;
      state.isSuccess = true;
    },
  },
});

export const { loginAction, registerAction } = authSlice.actions;

export const authState = (state: RootState) => state.entities.auth;

export default authSlice.reducer;
