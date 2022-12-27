import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { User } from "../reducers/user";

// 테스트 코드
const delay = (time: number, value: object) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(value);
    }, time);
  });

export const logIn = createAsyncThunk("user/logIn", async (data, thunkAPI) => {
  // throw new Error('비밀번호가 틀렸습니다.');
  return await delay(500, {
    userId: 1,
    nickname: "seongjun",
  });
});

//회원가입
export const addUserAsync = createAsyncThunk<User, any>(
  "ADD_USER",
  async (user: User) => {
    try {
      const response = await axios.post(
        "http://3.36.112.187:8080/api/v1/auth/register",
        user
      );
      alert("회원가입에 성공하였습니다.");
      console.log(response.data);
      return response.data;
    } catch (e: any) {
      alert("회원가입에 실패하였습니다.");
      console.log(e);
    }
  }
);

// 로그인
export const setUserAsync = createAsyncThunk<User, any>(
  "SET_USER",
  async (user: User) => {
    try {
      const response = await axios.post(
        "http://localhost:3090/api/auth/login/${user.id}"
      );
      alert("로그인에 성공하였습니다.");
      return response.data;
    } catch (e) {
      alert("로그인에 실패하였습니다.");
      console.log(e);
    }
  }
);
