import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../redux/store";
import { addUserAsync, setUserAsync } from "../actions/UserAPI";
import axios from "axios";

export interface User {
  isLoggingIn: boolean;
  email: string;
  password: string;
  nickname: string;
  accessToken: string;
  error: any;
}

const initialState: User = {
  isLoggingIn: false,
  email: "",
  password: "",
  nickname: "",
  accessToken: "",
  error: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logOut: (state) => {
      state.accessToken = "";
    },
  },
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
        console.log("pending");
        state.isLoggingIn = true;
      })
      .addCase(setUserAsync.fulfilled, (state, action) => {
        console.log(action.payload);
        state.isLoggingIn = false;
        state.accessToken = action.payload.accessToken;
        state.email = action.payload.email;
        state.password = action.payload.password;
        state.nickname = action.payload.nickname;
      })
      .addCase(setUserAsync.rejected, (state, action) => {
        console.log("error");
        state.error = action.payload;
      }),
});

export default userSlice;
