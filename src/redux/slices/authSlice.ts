import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "src/redux/store";

interface Auth {
  login:
    | any
    | {
        username: string;
        password: string;
      };
  register:
    | any
    | {
        name: string;
        email: string;
        password: string;
        confirmPassword: string;
      };
  isSuccess: boolean;
}

const initialState: Auth = {
  login: {},
  register: {},
  isSuccess: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginAction(state, { payload }) {
      state.login = payload;
      if (
        state.login.username === "admin" &&
        state.login.password === "Test12345"
      ) {
        state.isSuccess = true;
      }
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
