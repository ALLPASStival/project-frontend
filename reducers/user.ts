import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { LoginUser } from "../actions/UserAPI";
import { RootState } from "../redux/store";
import axios from "axios";

export interface User {
  id: string;
  password: string;
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  errorMessage: string;
}

const initialState: User = {
  id: "",
  password: "",
  isLoading: false,
  isSuccess: false,
  isError: false,
  errorMessage: "",
};

export const addUserAsync = createAsyncThunk("ADD_USER", async (user: User) => {
  const response = await axios.post(
    "http://localhost:3090/api/auth/register",
    user
  );
  alert("회원가입에 성공하였습니다.");
  return response.data;
});

//로그인
export const setUserAsync = createAsyncThunk(
  "SET_USER",
  async (user: User): Promise<User> => {
    const response = await axios.post(
      "http://localhost:3090/api/auth/login/${user.id}"
    );
    alert("로그인에 성공하였습니다.");
    return response.data;
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // builder.addCase(setUserAsync.pending, (state, action) => {
    //   return { ...state,  };
    // });
    builder.addCase(setUserAsync.fulfilled, (state, action) => {
      return { ...state, ...action.payload };
    });
    // builder.addCase(setUserAsync.rejected, (state, action) => {
    //   return { ...state, ...action.payload };
    // });
  },
});

export default userSlice.reducer;

//회원가입
