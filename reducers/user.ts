import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../redux/store";
import {
  addUserAsync,
  logoutUserAsync,
  setUserAsync,
} from "../actions/UserAPI";
import axios from "axios";

export interface Register {
  isLoggingIn: boolean;
  email: string;
  password: string;
  nickname: string;
  jwt: string;
  error: any;
  result: any;
}

const initialState: Register = {
  isLoggingIn: false,
  email: "",
  password: "",
  nickname: "",
  jwt: "",
  error: "",
  result: {},
};

export const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      //회원가입
      .addCase(addUserAsync.pending, (state, action) => {
        console.log("pending");
      })
      .addCase(addUserAsync.fulfilled, (state, action) => {
        console.log(action.payload);
        state.email = action.payload.email;
        state.password = action.payload.password;
        state.nickname = action.payload.nickname;
      })
      .addCase(addUserAsync.rejected, (state, action) => {
        console.log("error");
        state.error = action.payload;
      })
      //로그인
      .addCase(setUserAsync.pending, (state, action) => {
        console.log("로그인 중");
        state.isLoggingIn = false;
      })
      .addCase(setUserAsync.fulfilled, (state, action) => {
        console.log(action.payload);
        state.isLoggingIn = true;
        state.jwt = action.payload?.result?.jwt;
        state.email = action.payload.email;
        state.password = action.payload.password;
        state.nickname = action.payload.nickname;
      })
      .addCase(setUserAsync.rejected, (state, action) => {
        console.log("error");
        state.error = action.payload;
      })
      .addCase(logoutUserAsync.pending, (state, action) => {
        console.log("로그아웃 중");
        state.isLoggingIn = true;
      })
      .addCase(logoutUserAsync.fulfilled, (state, action) => {
        console.log(action.payload);
        state.isLoggingIn = false;
      })
      .addCase(logoutUserAsync.rejected, (state, action) => {
        console.log("error");
        state.error = action.payload;
      }),
});

export default registerSlice;
