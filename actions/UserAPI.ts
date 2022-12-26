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

export const addUserAsync = createAsyncThunk("ADD_USER", async (user: User) => {
  const response = await axios.post(
    "http://3.36.112.187:8080/api/v1/auth/register",
    user
  );
  alert("회원가입에 성공하였습니다.");
  return response.data;
});

//로그인
// export const setUserAsync = createAsyncThunk(
//     "SET_USER",
//     async (user: User): Promise<User> => {
//         const response = await axios.post(
//             "http://localhost:3090/api/auth/login/${user.id}"
//         );
//         alert("로그인에 성공하였습니다.");
//         return response.data;
//     }
// );
