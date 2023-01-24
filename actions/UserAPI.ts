import { TokenHeader } from "@components/TokenHeader";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { InfoAtt, Register } from "../reducers/user";

const headers = {
  "X-Requested-With": "XMLHttpRequest",
};

// 테스트 코드
const delay = (time: number, value: object) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(value);
    }, time);
  });

//회원가입
export const addUserAsync = createAsyncThunk<Register, any>(
  "ADD_USER",
  async ({ email, password, nickname, gender, age }: any, thunkAPI) => {
    try {
      const response = await axios.post(
        "http://3.36.112.187:8080/api/v1/auth/register",
        { email, password, nickname, gender, age },
        { withCredentials: true, headers }
      );
      alert("회원가입에 성공하였습니다.");
      return response.data;
    } catch (e: any) {
      alert("회원가입에 실패하였습니다.");
      return thunkAPI.rejectWithValue(e.response.data);
    }
  }
);

// 로그인
export const setUserAsync = createAsyncThunk<Register, any>(
  "SET_USER",
  async ({ email, password }: any, thunkAPI) => {
    try {
      const response = await axios.post(
        "http://3.36.112.187:8080/api/v1/auth/login",
        { email, password },
        { withCredentials: true }
      );
      alert("로그인에 성공하였습니다.");
      console.log(response?.data?.result?.jwt);
      localStorage.setItem("jwt", response?.data?.result?.jwt);
      return response.data;
    } catch (e: any) {
      alert("로그인에 실패하였습니다.");
      console.log(e);
      return thunkAPI.rejectWithValue(e.response.data);
    }
  }
);

// 유저 정보 조회
export const getUserInfo = createAsyncThunk<InfoAtt, any>(
  "users/getUserInfo",
  async () => {
    try {
      const res = await axios.get(
        "http://3.36.112.187:8080/api/v1" + "/users",
        TokenHeader
      );
      console.log("❕유저 정보 조회❕ ", res.data);
      return res.data;
    } catch (e) {
      console.error("⚠️ 유저 정보 조회 ⚠️ ", e);
    }
  }
);

export const logoutUserAsync = createAsyncThunk<Register, any>(
  "LOGOUT_USER",
  async ({ jwt }: any, thunkAPI) => {
    try {
      const response = await axios.post(
        "http://3.36.112.187:8080/api/v1/auth/logout",
        { jwt },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("jwt")}`,
          },
        }
      );
      alert("로그아웃에 성공하였습니다.");
      localStorage.removeItem("jwt");
      return response.data;
    } catch (e: any) {
      alert("로그아웃에 실패하였습니다.");
      console.log(e);
      return thunkAPI.rejectWithValue(e.response.data);
    }
  }
);
