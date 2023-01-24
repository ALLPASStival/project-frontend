import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../redux/store";
import {
  addUserAsync,
  getUserInfo,
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

export interface InfoAtt {
  resultCode: "";
  result: {
    email: string;
    nickname: string;
    profilePicUrl: any;
    gender: any;
    age: any;
  };
}

const userSlice = createSlice({
  name: "user",
  initialState: {
    resultCode: "",
    result: {
      email: "1234",
      nickname: "1234",
      profilePicUrl: "",
      gender: "",
      age: "",
    },
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // 통신 성공(유저 정보 조회)
      .addCase(getUserInfo.fulfilled, (state, action) => {
        state.resultCode = action.payload.resultCode;
        state.result = action.payload.result;
      })
      // 통신 에러(유저 정보 조회)
      .addCase(getUserInfo.rejected, (state, action) => {
        state.resultCode = "error";
      });
  },
});

export default userSlice;
